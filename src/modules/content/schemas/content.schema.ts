import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';

export type ContentDocument = Content & Document;

export enum ContentType {
  PAGE = 'page',
  POST = 'post',
  BLOG = 'blog',
  BANNER = 'banner',
  MENU = 'menu',
}

export enum ContentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.CONTENTS,
})
export class Content {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ type: String, default: '' })
  content: string;

  @Prop({ type: String, default: '' })
  excerpt: string;

  @Prop({ type: String, enum: ContentType, default: ContentType.POST })
  type: ContentType;

  @Prop({ type: String, enum: ContentStatus, default: ContentStatus.DRAFT })
  status: ContentStatus;

  @Prop({ type: String, default: '' })
  featuredImage: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ type: [String], default: [] })
  categories: string[];

  @Prop({ type: Object, default: {} })
  metadata: Record<string, any>;

  @Prop({ type: String })
  author: string;

  @Prop({ type: Date })
  publishedAt?: Date;

  @Prop({ type: Number, default: 0 })
  order: number;

  @Prop({ type: Boolean, default: true })
  isActive: boolean;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
