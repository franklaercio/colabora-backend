import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category-entity';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiCreatedResponse({ type: CategoryEntity })
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
  @ApiOkResponse({ type: CategoryEntity })
  async getAllCategories() {
    const categories = await this.categoryService.getAllCategories();
    return {
      categories,
    };
  }
}
