import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SuggestionDocument = Suggestion & Document;

@Schema()
export class Suggestion {
  @Prop()
  userId: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  description: string;
}

export const SuggestionSchema = SchemaFactory.createForClass(Suggestion);
