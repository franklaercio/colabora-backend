import {
  Controller,
  Post,
  Body,
  Get,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category-entity';
import { CreateCategoryDto } from './dtos/create-category-dto';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: CategoryEntity })
  async createProposta(@Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoryService.createCategory(
      createCategoryDto,
    );
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
