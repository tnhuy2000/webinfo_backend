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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = exports.Article = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
const graphql_schema_1 = require("../../../graphql.schema");
let Article = class Article {
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    coverImage;
    tags;
    categories;
    status;
    publishedAt;
    author;
    readingTime;
    views;
    isFeatured;
    order;
    isActive;
};
exports.Article = Article;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Article.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Article.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "excerpt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", graphql_schema_1.LinkDocument)
], Article.prototype, "thumbnail", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", graphql_schema_1.LinkDocument)
], Article.prototype, "coverImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Article.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Article.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: graphql_schema_1.ArticleStatus.draft }),
    __metadata("design:type", String)
], Article.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Article.prototype, "publishedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Article.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Article.prototype, "readingTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Article.prototype, "views", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Article.prototype, "isFeatured", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Article.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Article.prototype, "isActive", void 0);
exports.Article = Article = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.ARTICLES,
    })
], Article);
exports.ArticleSchema = mongoose_1.SchemaFactory.createForClass(Article);
//# sourceMappingURL=article.schema.js.map