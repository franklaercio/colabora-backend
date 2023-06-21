import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSuggestionDto } from './dtos/create-suggestion-dto';
import { Suggestion } from '@prisma/client';

@Injectable()
export class SuggestionService {
  constructor(private prisma: PrismaService) {}

  async createSuggestion(
    createSuggestionDto: CreateSuggestionDto,
  ): Promise<Suggestion> {
    return await this.prisma.suggestion.create({ data: createSuggestionDto });
  }
}
