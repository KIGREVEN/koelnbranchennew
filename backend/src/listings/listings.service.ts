import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { Prisma, CompanyListing } from '@prisma/client';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CompanyListingCreateInput): Promise<CompanyListing> {
    return this.prisma.companyListing.create({ data });
  }

  async findOne(id: number): Promise<CompanyListing | null> {
    return this.prisma.companyListing.findUnique({
      where: { id },
      include: { reviews: true, address: true, categories: { include: { category: true } } },
    });
  }

  async findByCategory(
    slug: string,
    skip = 0,
    take = 20,
    filters: any = {},
  ) {
    return this.prisma.companyListing.findMany({
      where: {
        categories: { some: { category: { slug } } },
      },
      skip,
      take,
    });
  }

  async update(id: number, data: Prisma.CompanyListingUpdateInput) {
    return this.prisma.companyListing.update({ where: { id }, data });
  }
}
