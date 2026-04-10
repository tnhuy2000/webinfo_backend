"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const article_service_1 = require("./article.service");
const graphql_schema_1 = require("../../graphql.schema");
let ArticleResolver = class ArticleResolver {
    articleService;
    constructor(articleService) {
        this.articleService = articleService;
    }
    async articles(isActive, isFeatured, status) {
        return this.articleService.findAll(isActive, isFeatured, status);
    }
    async article(id) {
        return this.articleService.findById(id);
    }
    async articleBySlug(slug) {
        return this.articleService.findBySlug(slug);
    }
    async createArticle(input) {
        return this.articleService.create(input);
    }
    async updateArticle(id, input) {
        return this.articleService.update(id, input);
    }
    async deleteArticle(id) {
        return this.articleService.delete(id);
    }
    async incrementArticleViews(id) {
        return this.articleService.incrementViews(id);
    }
};
exports.ArticleResolver = ArticleResolver;
__decorate([
    (0, graphql_1.Query)('articles'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __param(1, (0, graphql_1.Args)('isFeatured')),
    __param(2, (0, graphql_1.Args)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Boolean, String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "articles", null);
__decorate([
    (0, graphql_1.Query)('article'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "article", null);
__decorate([
    (0, graphql_1.Query)('articleBySlug'),
    __param(0, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "articleBySlug", null);
__decorate([
    (0, graphql_1.Mutation)('createArticle'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateArticleInput]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "createArticle", null);
__decorate([
    (0, graphql_1.Mutation)('updateArticle'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateArticleInput]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "updateArticle", null);
__decorate([
    (0, graphql_1.Mutation)('deleteArticle'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "deleteArticle", null);
__decorate([
    (0, graphql_1.Mutation)('incrementArticleViews'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleResolver.prototype, "incrementArticleViews", null);
exports.ArticleResolver = ArticleResolver = __decorate([
    (0, graphql_1.Resolver)('Article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleResolver);
//# sourceMappingURL=article.resolver.js.map