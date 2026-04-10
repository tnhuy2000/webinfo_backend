import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';

export type TagDocument = Tag & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.TAGS,
})
export class Tag {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  description?: string;

  @Prop()
  color?: string;

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
