import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SocialLinkService } from './social-link.service';
import { SocialLinkResolver } from './social-link.resolver';
import { SocialLink, SocialLinkSchema } from './schemas/social-link.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SocialLink.name, schema: SocialLinkSchema },
    ]),
  ],
  providers: [SocialLinkResolver, SocialLinkService],
  exports: [SocialLinkService],
})
export class SocialLinkModule {}
