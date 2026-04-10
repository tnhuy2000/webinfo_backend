import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';
import { SettingCategory } from 'src/graphql.schema';

export type SettingDocument = Setting & Document;


@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.SETTINGS,
})
export class Setting {
  @Prop({ required: true, unique: true })
  key: string;

  @Prop({ type: Object, required: true })
  value: any;

  @Prop({ type: String, enum: SettingCategory, default: SettingCategory.GENERAL })
  category: SettingCategory;

  @Prop({ type: String, default: '' })
  description: string;

  @Prop({ type: String, default: 'text' })
  type: string; // text, number, boolean, json, array, etc.

  @Prop({ type: Boolean, default: true })
  isPublic: boolean;

  @Prop({ type: Boolean, default: false })
  isDefault: boolean; // System default settings cannot be deleted
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
