import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createProposta(
    @Body('name') name: string,
    @Body('description') descricao: string,
  ) {
    const category = await this.categoryService.createCategory(name, descricao);
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
