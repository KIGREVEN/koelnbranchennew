import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  create(listingId: number, rating: number, text: string) {
    return this.prisma.review.create({
      data: { listingId, rating, text },
    });
  }
}
