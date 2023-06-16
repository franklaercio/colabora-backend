import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Suggestion,
  SuggestionDocument,
} from '../../schemas/suggestion.schema';

@Injectable()
export class SuggestionService {
  constructor(
    @InjectModel(Suggestion.name)
    private suggestionModel: Model<SuggestionDocument>,
  ) {}

  async createSuggestion(
    userId: string,
    title: string,
    categoryId: string,
    description: string,
  ): Promise<Suggestion> {
    const suggestion = new this.suggestionModel({
      userId,
      title,
      categoryId,
      description,
    });
    return suggestion.save();
  }
}
