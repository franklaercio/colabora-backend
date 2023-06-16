import { Controller, Post, Body } from '@nestjs/common';
import { CategoryService } from '../../services/category/category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  async createProposta(
    @Body('name') name: string,
    @Body('description') descricao: string,
  ) {
    const category = await this.CategoryService.createCategory(name, descricao);
    return {
      message: 'Category created successfully',
      category,
    };
  }
}
