import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
  ) {}

  async createCategory(name: string, description: string): Promise<Category> {
    const Category = new this.categoryModel({
      name,
      description,
    });
    return Category.save();
  }

  async getAllCategories(): Promise<string[]> {
    const categories = await this.categoryModel.distinct('categoria').exec();
    return categories;
  }
}
