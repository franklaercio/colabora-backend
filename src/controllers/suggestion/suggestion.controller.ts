import { Controller, Post, Body } from '@nestjs/common';
import { SuggestionService } from '../../services/suggestion/suggestion.service';

@Controller('suggestion')
export class SuggestionController {
  constructor(private readonly suggestionService: SuggestionService) {}

  @Post()
  async createProposta(
    @Body('userId') usuarioId: string,
    @Body('title') titulo: string,
    @Body('categoryId') categoriaId: string,
    @Body('description') descricao: string,
  ) {
    const proposta = await this.suggestionService.createSuggestion(
      usuarioId,
      titulo,
      categoriaId,
      descricao,
    );
    return {
      message: 'Suggestion created successfully',
      proposta,
    };
  }
}
