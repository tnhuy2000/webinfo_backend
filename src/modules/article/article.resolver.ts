import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import {
  CreateArticleInput,
  UpdateArticleInput,
  ArticleStatus,
} from '../../graphql.schema';

@Resolver('Article')
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query('articles')
  async articles(
    @Args('isActive') isActive?: boolean,
    @Args('isFeatured') isFeatured?: boolean,
    @Args('status') status?: ArticleStatus,
  ) {
    return this.articleService.findAll(isActive, isFeatured, status);
  }

  @Query('article')
  async article(@Args('id') id: string) {
    return this.articleService.findById(id);
  }

  @Query('articleBySlug')
  async articleBySlug(@Args('slug') slug: string) {
    return this.articleService.findBySlug(slug);
  }

  @Mutation('createArticle')
  async createArticle(@Args('input') input: CreateArticleInput) {
    return this.articleService.create(input);
  }

  @Mutation('updateArticle')
  async updateArticle(
    @Args('id') id: string,
    @Args('input') input: UpdateArticleInput,
  ) {
    return this.articleService.update(id, input);
  }

  @Mutation('deleteArticle')
  async deleteArticle(@Args('id') id: string) {
    return this.articleService.delete(id);
  }

  @Mutation('incrementArticleViews')
  async incrementArticleViews(@Args('id') id: string) {
    return this.articleService.incrementViews(id);
  }
}
