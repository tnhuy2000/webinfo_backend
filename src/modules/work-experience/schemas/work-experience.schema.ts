import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';

export type WorkExperienceDocument = WorkExperience & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.WORK_EXPERIENCES,
})
export class WorkExperience {
  @Prop({ required: true })
  period: string; // e.g., "2022 -", "2021 - 2022"

  @Prop({ required: true })
  duration: string; // e.g., "1 year 5 months"

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  technologies: string; // e.g., "React & Vue"

  @Prop({ default: false })
  isHighlighted: boolean;

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const WorkExperienceSchema = SchemaFactory.createForClass(WorkExperience);
