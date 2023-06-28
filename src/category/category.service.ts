import { Injectable, Logger } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create.category.dto';
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

  async getAllCategories(name: string): Promise<Category[]> {
    if (name) {
      const categories = await this.categoryModel.find({ name }).exec();
      return categories;
    } else {
      const categories = await this.categoryModel.find().exec();
      return categories;
    }
  }

  async getById(id: string): Promise<Category | null> {
    const category = await this.categoryModel.findById({ _id: id }).exec();
    return category;
  }
}
