import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { CreateSuggestionDto } from './dtos/create.suggestion.dto';
import { SuggestionService } from './suggestion.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SuggestionEntity } from './entities/suggestion.entity';

@Controller('suggestion')
@ApiTags('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Post()
  @UsePipes(new ValidationPipe())
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

  @Get()
  @ApiOkResponse({ type: SuggestionEntity })
  async getAll() {
    const suggestions = await this.suggestionService.getAll();
    return {
      suggestions,
    };
  }
}
