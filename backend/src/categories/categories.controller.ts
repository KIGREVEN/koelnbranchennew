import { Controller, Get, Param, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('api/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':slug/listings')
  findListings(
    @Param('slug') slug: string,
    @Query('skip') skip = '0',
    @Query('take') take = '20',
  ) {
    return this.categoriesService.findListingsBySlug(slug, +skip, +take);
  }
}
