import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dtos/create.suggestion.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Suggestion } from './schemas/suggestion.schema';
import { Model } from 'mongoose';

@Injectable()
export class SuggestionService {
  constructor(
    @InjectModel(Suggestion.name) private suggestionModel: Model<Suggestion>,
  ) {}

  async createSuggestion(
    createSuggestionDto: CreateSuggestionDto,
  ): Promise<Suggestion> {
    const suggestionCreated = new this.suggestionModel(createSuggestionDto);
    return await suggestionCreated.save();
  }

  async getAll(): Promise<Suggestion[]> {
    const suggestions = await this.suggestionModel.find().exec();
    return suggestions;
  }
}
