import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../schemas/category.schema';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
