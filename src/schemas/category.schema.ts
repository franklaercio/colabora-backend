import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsNotEmpty } from 'class-validator';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsNotEmpty()
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
