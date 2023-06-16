import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuggestionController } from 'src/controllers/suggestion/suggestion.controller';
import { Suggestion, SuggestionSchema } from 'src/schemas/suggestion.schema';
import { SuggestionService } from 'src/services/suggestion/suggestion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Suggestion.name, schema: SuggestionSchema },
    ]),
  ],
  controllers: [SuggestionController],
  providers: [SuggestionService],
})
export class SuggestionModule {}
