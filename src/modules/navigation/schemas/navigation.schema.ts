import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';

export type NavigationDocument = Navigation & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.NAVIGATIONS,
})
export class Navigation {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  href: string;

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const NavigationSchema = SchemaFactory.createForClass(Navigation);
