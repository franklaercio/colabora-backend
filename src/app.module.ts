import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { SuggestionModule } from './suggestion/suggestion.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [UserModule, SuggestionModule, CategoryModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
