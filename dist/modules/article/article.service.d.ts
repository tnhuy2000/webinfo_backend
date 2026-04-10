import { Model } from 'mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { CreateArticleInput, UpdateArticleInput, ArticleStatus } from '../../graphql.schema';
export declare class ArticleService {
    private readonly articleModel;
    constructor(articleModel: Model<ArticleDocument>);
    create(input: CreateArticleInput): Promise<Article>;
    findAll(isActive?: boolean, isFeatured?: boolean, status?: ArticleStatus): Promise<Article[]>;
    findById(id: string): Promise<Article>;
    findBySlug(slug: string): Promise<Article>;
    update(id: string, input: UpdateArticleInput): Promise<Article>;
    delete(id: string): Promise<boolean>;
    incrementViews(id: string): Promise<Article>;
}
