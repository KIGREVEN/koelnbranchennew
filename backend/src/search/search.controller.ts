import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('api/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get('suggest')
  suggest(@Query('q') q: string) {
    return this.searchService.suggest(q);
  }
}
