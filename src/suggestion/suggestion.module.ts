import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SuggestionService } from 'src/suggestion/suggestion.service';
import { SuggestionController } from './suggestion.controller';

@Module({
  imports: [PrismaModule],
  controllers: [SuggestionController],
  providers: [SuggestionService],
})
export class SuggestionModule {}
