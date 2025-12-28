import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_COLLECTION_NAME } from 'src/constant';
import { Document } from 'mongoose';
import { IdHelper } from '../../../common/utils/id.helper';

export type ContactMessageDocument = ContactMessage & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.CONTACT_MESSAGES,
})
export class ContactMessage {
  @Prop({ type: String, default: () => IdHelper.generate() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone?: string;

  @Prop({ required: true })
  subject: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: false })
  isRead: boolean;

  createdAt: Date;
}

export const ContactMessageSchema =
  SchemaFactory.createForClass(ContactMessage);
