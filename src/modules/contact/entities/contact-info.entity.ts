import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_COLLECTION_NAME } from 'src/constant';
import { Document } from 'mongoose';
import { SocialLinks } from '../../../common/types/social-links.type';
import { IdHelper } from '../../../common/utils/id.helper';

export type ContactInfoDocument = ContactInfo & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.CONTACT_INFO,
})
export class ContactInfo {
  @Prop({ type: String, default: () => IdHelper.generate() })
  _id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop()
  workingHours?: string;

  @Prop({ type: SocialLinks })
  socialLinks?: SocialLinks;

  createdAt: Date;
  updatedAt: Date;
}

export const ContactInfoSchema = SchemaFactory.createForClass(ContactInfo);
