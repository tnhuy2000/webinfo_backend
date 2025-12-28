import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_COLLECTION_NAME } from 'src/constant';
import { Document } from 'mongoose';
import { IdHelper } from '../../../common/utils/id.helper';

class Address {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  zipCode?: string;
}

export type CompanyDocument = Company & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.COMPANIES,
})
export class Company {
  @Prop({ type: String, default: () => IdHelper.generate() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  mission?: string;

  @Prop()
  vision?: string;

  @Prop()
  founded?: string;

  @Prop()
  employees?: number;

  @Prop({ type: Address })
  address?: Address;

  createdAt: Date;
  updatedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
