import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SuggestionService } from './services/suggestion/suggestion.service';
import { SuggestionController } from './controllers/suggestion/suggestion.controller';
import { SuggestionModule } from './modules/suggestion/suggestion.module';
import { CategoryService } from './services/category/category.service';
import { CategoryModule } from './modules/category/category.module';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
    SuggestionModule,
    CategoryModule,
  ],
  controllers: [AppController, SuggestionController, CategoryController],
  providers: [AppService, SuggestionService, CategoryService],
})
export class AppModule {}
