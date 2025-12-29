import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CreateContentInput, QueryContentInput, UpdateContentInput } from 'src/graphql.schema';

@Resolver('Content')
@UseGuards(GqlAuthGuard)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Query('contents')
  async getContents(@Args('query') query: QueryContentInput) {
    const queryDto = {
      type: query.type,
      status: query.status,
      search: query.search,
      page: query.page || 1,
      limit: query.limit || 10,
      sortBy: query.sortBy || 'createdAt',
      sortOrder: query.sortOrder || 'desc',
    };
    return this.contentService.findAll(queryDto);
  }

  @Query('content')
  async getContent(@Args('id') id: string) {
    return this.contentService.findOne(id);
  }

  @Query('contentBySlug')
  async getContentBySlug(@Args('slug') slug: string) {
    return this.contentService.findBySlug(slug);
  }

  @Mutation('createContent')
  async createContent(@Args('input') input: CreateContentInput) {
    return this.contentService.create(input);
  }

  @Mutation('updateContent')
  async updateContent(@Args('id') id: string, @Args('input') input: UpdateContentInput) {
    return this.contentService.update(id, input);
  }

  @Mutation('deleteContent')
  async deleteContent(@Args('id') id: string) {
    await this.contentService.delete(id);
    return true;
  }

  @Mutation('bulkDeleteContents')
  async bulkDeleteContents(@Args('ids') ids: string[]) {
    const result = await this.contentService.bulkDelete(ids);
    return result.deletedCount;
  }
}
