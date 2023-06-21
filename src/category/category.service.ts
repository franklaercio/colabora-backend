import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(name: string, description: string): Promise<Category> {
    return await this.prisma.category.create({ data: { name, description } });
  }

  async getAllCategories(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async getCategoryById(id: string): Promise<Category> {
    return await this.prisma.category.findFirst({ where: { id } });
  }
}
