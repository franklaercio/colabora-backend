import { Controller, Post, Body } from '@nestjs/common';
import { CreateSuggestionDto } from './dtos/create-suggestion-dto';
import { SuggestionService } from './suggestion.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SuggestionEntity } from './entities/suggestion-entity';

@Controller('suggestion')
@ApiTags('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Post()
  @ApiCreatedResponse({ type: SuggestionEntity })
  async createSuggestion(@Body() createSuggestionDto: CreateSuggestionDto) {
    const suggestion = await this.suggestionService.createSuggestion(
      createSuggestionDto,
    );
    return {
      message: 'Suggestion created successfully',
      suggestion,
    };
  }
}
