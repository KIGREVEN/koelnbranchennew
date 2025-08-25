import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateListingDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsString()
  description?: string;

  @IsArray()
  @IsOptional()
  categoryIds?: number[];
}
