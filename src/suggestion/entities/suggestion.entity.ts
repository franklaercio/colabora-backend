import { ApiProperty } from '@nestjs/swagger';
import { Suggestion } from '../schemas/suggestion.schema';
import { Category } from 'src/category/schemas/category.schema';
import { User } from 'src/user/schemas/user.schema';

export class SuggestionEntity implements Suggestion {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  content: string | null;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  authorId: User;

  @ApiProperty()
  categoryId: Category;
}
