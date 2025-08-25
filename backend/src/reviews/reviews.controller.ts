import { Controller, Post, Param, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('api/listings/:id/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(
    @Param('id') id: string,
    @Body('rating') rating: number,
    @Body('text') text: string,
  ) {
    return this.reviewsService.create(+id, rating, text);
  }
}
