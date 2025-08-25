import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.category.findMany();
  }

  findListingsBySlug(slug: string, skip = 0, take = 20) {
    return this.prisma.companyListing.findMany({
      where: { categories: { some: { category: { slug } } } },
      skip,
      take,
    });
  }
}
