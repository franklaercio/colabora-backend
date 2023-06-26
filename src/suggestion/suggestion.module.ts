import { Module } from '@nestjs/common';
import { SuggestionService } from 'src/suggestion/suggestion.service';
import { SuggestionController } from './suggestion.controller';
import { Suggestion, SuggestionSchema } from './schemas/suggestion.schema';
import { MongooseModule } from '@nestjs/mongoose';

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
