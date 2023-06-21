import { Suggestion } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

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
  authorId: string;

  @ApiProperty()
  categoryId: string;
}
