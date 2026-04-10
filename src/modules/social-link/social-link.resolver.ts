import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SocialLinkService } from './social-link.service';
import {
  CreateSocialLinkInput,
  UpdateSocialLinkInput,
} from '../../graphql.schema';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver('SocialLink')
export class SocialLinkResolver {
  constructor(private readonly socialLinkService: SocialLinkService) {}

  @Query('socialLinks')
  async socialLinks(@Args('isActive') isActive?: boolean) {
    return this.socialLinkService.findAll(isActive);
  }

  @Query('socialLink')
  async socialLink(@Args('id') id: string) {
    return this.socialLinkService.findById(id);
  }

  @Mutation('createSocialLink')
  async createSocialLink(@Args('input') input: CreateSocialLinkInput) {
    return this.socialLinkService.create(input);
  }

  @Mutation('updateSocialLink')
  async updateSocialLink(
    @Args('id') id: string,
    @Args('input') input: UpdateSocialLinkInput,
  ) {
    return this.socialLinkService.update(id, input);
  }

  @Mutation('deleteSocialLink')
  async deleteSocialLink(@Args('id') id: string) {
    return this.socialLinkService.delete(id);
  }
}
