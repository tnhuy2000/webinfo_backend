import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATABASE_COLLECTION_NAME } from '../../../constant';
import { SocialPlatform } from 'src/graphql.schema';

export type SocialLinkDocument = SocialLink & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.SOCIAL_LINKS,
})
export class SocialLink {
  @Prop({ required: true, type: String })
  platform: SocialPlatform;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  href: string;

  @Prop()
  icon?: string;

  @Prop({ default: 0 })
  order: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const SocialLinkSchema = SchemaFactory.createForClass(SocialLink);
