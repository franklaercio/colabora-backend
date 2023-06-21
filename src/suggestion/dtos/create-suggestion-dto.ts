import { ApiProperty } from '@nestjs/swagger';

export class CreateSuggestionDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  categoryId: string;
}
