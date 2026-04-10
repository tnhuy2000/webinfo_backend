import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';
import { LinkDocument, ProjectImage, ProjectLink, ProjectStatus } from 'src/graphql.schema';

export type ProjectDocument = Project & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.PROJECTS,
})
export class Project {
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

  @Prop({ type: [ProjectImage], default: [] })
  images: ProjectImage[];

  @Prop({ type: [String], default: [] })
  tags: string[]; // Tag IDs

  @Prop({ type: [String], default: [] })
  technologies: string[]; // Technology names

  @Prop({ type: [ProjectLink], default: [] })
  links: ProjectLink[];

  @Prop({ type: String, default: ProjectStatus.draft })
  status: ProjectStatus;

  @Prop()
  startDate?: Date;

  @Prop()
  endDate?: Date;

  @Prop({ default: false })
  isFeatured: boolean;

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
