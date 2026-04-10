import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { CreateTagInput, UpdateTagInput } from '../../graphql.schema';

@Resolver('Tag')
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query('tags')
  async tags(@Args('isActive') isActive?: boolean) {
    return this.tagService.findAll(isActive);
  }

  @Query('tag')
  async tag(@Args('id') id: string) {
    return this.tagService.findById(id);
  }

  @Query('tagBySlug')
  async tagBySlug(@Args('slug') slug: string) {
    return this.tagService.findBySlug(slug);
  }

  @Mutation('createTag')
  async createTag(@Args('input') input: CreateTagInput) {
    return this.tagService.create(input);
  }

  @Mutation('updateTag')
  async updateTag(
    @Args('id') id: string,
    @Args('input') input: UpdateTagInput,
  ) {
    return this.tagService.update(id, input);
  }

  @Mutation('deleteTag')
  async deleteTag(@Args('id') id: string) {
    return this.tagService.delete(id);
  }
}
