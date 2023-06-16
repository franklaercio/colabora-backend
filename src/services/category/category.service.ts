import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schemas/category.schema';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private CategoryModel: Model<CategoryDocument>,
  ) {}

  async createCategory(name: string, description: string): Promise<Category> {
    const Category = new this.CategoryModel({
      name,
      description,
    });
    return Category.save();
  }
}
