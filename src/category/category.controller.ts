import {
  Controller,
  Post,
  Body,
  Get,
  ValidationPipe,
  UsePipes,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dtos/create.category.dto';

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

  @Get()
  @ApiOkResponse({ type: CategoryEntity })
  async getAllCategories() {
    const categories = await this.categoryService.getAllCategories();
    return {
      categories,
    };
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({ type: CategoryEntity })
  async getById(@Param() params: any) {
    const category = await this.categoryService.getById(params.id);

    if (category) {
      return {
        status: HttpStatus.OK,
        message: 'Category retrieve with success',
        data: {
          id: category.id,
          name: category.name,
          description: category.description,
        },
      };
    } else {
      return {
        status: HttpStatus.NOT_FOUND,
        message: 'Category not found',
      };
    }
  }
}
