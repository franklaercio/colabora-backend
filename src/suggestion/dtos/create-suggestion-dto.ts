import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSuggestionDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  @IsNotEmpty()
  authorId: string;

  @ApiProperty()
  @IsNotEmpty()
  categoryId: string;
}
