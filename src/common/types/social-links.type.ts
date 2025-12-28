import { Prop } from '@nestjs/mongoose';

export class SocialLinks {
  @Prop()
  linkedin?: string;

  @Prop()
  twitter?: string;

  @Prop()
  github?: string;

  @Prop()
  facebook?: string;
}
