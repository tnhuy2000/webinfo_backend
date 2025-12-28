import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_COLLECTION_NAME } from 'src/constant';
import { Document } from 'mongoose';
import { IdHelper } from '../../../common/utils/id.helper';

export type ServiceDocument = Service & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.SERVICES,
})
export class Service {
  @Prop({ type: String, default: () => IdHelper.generate() })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  icon?: string;

  @Prop({ type: [String], default: [] })
  features: string[];

  @Prop()
  price?: string;

  @Prop({ default: true })
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
