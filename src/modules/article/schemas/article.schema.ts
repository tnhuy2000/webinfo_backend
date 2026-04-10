import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';
import { ArticleStatus, LinkDocument } from 'src/graphql.schema';

export type ArticleDocument = Article & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.ARTICLES,
})
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop()
  description?: string;

  @Prop()
  content?: string; // Rich text/markdown content

  @Prop()
  excerpt?: string; // Short summary

  @Prop()
  thumbnail?: LinkDocument;

  @Prop()
  coverImage?: LinkDocument;

  @Prop({ type: [String], default: [] })
  tags: string[]; // Tag IDs

  @Prop({ type: [String], default: [] })
  categories: string[];

  @Prop({ type: String, default: ArticleStatus.draft })
  status: ArticleStatus;

  @Prop()
  publishedAt?: Date;

  @Prop()
  author?: string;

  @Prop({ default: 0 })
  readingTime: number; // in minutes

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: false })
  isFeatured: boolean;

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
