import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';
import { SkillVariant } from 'src/graphql.schema';

export type SkillDocument = Skill & Document;

// Embedded SkillItem schema
@Schema({ _id: false })
export class SkillItem {
  @Prop({ required: true })
  name: string;

  @Prop({ default: 0 })
  order: number;
}

export const SkillItemSchema = SchemaFactory.createForClass(SkillItem);

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.SKILLS,
})
export class Skill {
  @Prop({ required: true })
  title: string;

  @Prop()
  description?: string;

  @Prop({ required: true, type: String })
  variant: SkillVariant;

  @Prop({ type: [SkillItemSchema], default: [] })
  items: SkillItem[];

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
