import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/category/schemas/category.schema';
import { User } from 'src/user/schemas/user.schema';

export type SuggestionDocument = HydratedDocument<Suggestion>;

@Schema({ timestamps: true })
export class Suggestion {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  content: string;

  @Prop({ default: true })
  published: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  authorId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: Category;
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion);
