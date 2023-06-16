import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';
import { CreateCategoryDto } from './create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    const category = await this.categoryService.createCategory(
      categoryDto.name,
      categoryDto.description,
    );
    return {
      message: 'Category created successfully',
      category,
    };
  }

  @Get('categories')
  async getAllCategories() {
    const categories = await this.categoryService.getAllCategories();
    return {
      categories,
    };
  }
}
