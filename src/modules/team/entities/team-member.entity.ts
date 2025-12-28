import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DATABASE_COLLECTION_NAME } from 'src/constant';
import { Document } from 'mongoose';
import { SocialLinks } from '../../../common/types/social-links.type';
import { IdHelper } from '../../../common/utils/id.helper';

export type TeamMemberDocument = TeamMember & Document;

@Schema({
  timestamps: true,
  collection: DATABASE_COLLECTION_NAME.TEAM_MEMBERS,
})
export class TeamMember {
  @Prop({ type: String, default: () => IdHelper.generate() })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop()
  bio?: string;

  @Prop({ required: true })
  avatar: string;

  @Prop()
  email?: string;

  @Prop()
  phone?: string;

  @Prop({ type: SocialLinks })
  socialLinks?: SocialLinks;

  @Prop({ type: [String], default: [] })
  skills: string[];

  @Prop({ default: true })
  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export const TeamMemberSchema = SchemaFactory.createForClass(TeamMember);
