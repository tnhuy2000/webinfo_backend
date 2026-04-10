import { ArticleService } from './article.service';
import { CreateArticleInput, UpdateArticleInput, ArticleStatus } from '../../graphql.schema';
export declare class ArticleResolver {
    private readonly articleService;
    constructor(articleService: ArticleService);
    articles(isActive?: boolean, isFeatured?: boolean, status?: ArticleStatus): Promise<import("./schemas/article.schema").Article[]>;
    article(id: string): Promise<import("./schemas/article.schema").Article>;
    articleBySlug(slug: string): Promise<import("./schemas/article.schema").Article>;
    createArticle(input: CreateArticleInput): Promise<import("./schemas/article.schema").Article>;
    updateArticle(id: string, input: UpdateArticleInput): Promise<import("./schemas/article.schema").Article>;
    deleteArticle(id: string): Promise<boolean>;
    incrementArticleViews(id: string): Promise<import("./schemas/article.schema").Article>;
}
