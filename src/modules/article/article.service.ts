import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import {
  CreateArticleInput,
  UpdateArticleInput,
  ArticleStatus,
} from '../../graphql.schema';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name)
    private readonly articleModel: Model<ArticleDocument>,
  ) {}

  async create(input: CreateArticleInput): Promise<Article> {
    const article = new this.articleModel(input);
    return article.save();
  }

  async findAll(
    isActive?: boolean,
    isFeatured?: boolean,
    status?: ArticleStatus,
  ): Promise<Article[]> {
    const filter: Record<string, unknown> = {};
    if (isActive !== undefined) filter.isActive = isActive;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured;
    if (status !== undefined) filter.status = status;
    return this.articleModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<Article> {
    const article = await this.articleModel.findById(id).exec();
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async findBySlug(slug: string): Promise<Article> {
    const article = await this.articleModel.findOne({ slug }).exec();
    if (!article) {
      throw new NotFoundException(`Article with slug ${slug} not found`);
    }
    return article;
  }

  async update(id: string, input: UpdateArticleInput): Promise<Article> {
    const article = await this.articleModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.articleModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return true;
  }

  async incrementViews(id: string): Promise<Article> {
    const article = await this.articleModel
      .findByIdAndUpdate(id, { $inc: { views: 1 } }, { new: true })
      .exec();
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }
}
