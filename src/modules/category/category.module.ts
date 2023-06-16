import { Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryController } from 'src/controllers/category/category.controller';
import { Category, CategorySchema } from 'src/schemas/category.schema';
import { CategoryService } from 'src/services/category/category.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService, ValidationPipe],
})
export class CategoryModule {}
