import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create-category-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    const categoryCreated = new this.categoryModel(createCategoryDto);
    return await categoryCreated.save();
  }

  async getAllCategories(): Promise<Category[]> {
    const categories = await this.categoryModel.find().exec();
    return categories;
  }

  async getCategoryById(id: string): Promise<Category> {
    return await this.categoryModel.findById({ where: { id } });
  }
}
