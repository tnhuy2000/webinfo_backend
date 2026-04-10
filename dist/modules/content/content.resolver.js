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
exports.ContentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const content_service_1 = require("./content.service");
const gql_auth_guard_1 = require("../auth/guards/gql-auth.guard");
const graphql_schema_1 = require("../../graphql.schema");
let ContentResolver = class ContentResolver {
    contentService;
    constructor(contentService) {
        this.contentService = contentService;
    }
    async getContents(query) {
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
    async getContent(id) {
        return this.contentService.findOne(id);
    }
    async getContentBySlug(slug) {
        return this.contentService.findBySlug(slug);
    }
    async createContent(input) {
        return this.contentService.create(input);
    }
    async updateContent(id, input) {
        return this.contentService.update(id, input);
    }
    async deleteContent(id) {
        await this.contentService.delete(id);
        return true;
    }
    async bulkDeleteContents(ids) {
        const result = await this.contentService.bulkDelete(ids);
        return result.deletedCount;
    }
};
exports.ContentResolver = ContentResolver;
__decorate([
    (0, graphql_1.Query)('contents'),
    __param(0, (0, graphql_1.Args)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.QueryContentInput]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "getContents", null);
__decorate([
    (0, graphql_1.Query)('content'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "getContent", null);
__decorate([
    (0, graphql_1.Query)('contentBySlug'),
    __param(0, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "getContentBySlug", null);
__decorate([
    (0, graphql_1.Mutation)('createContent'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateContentInput]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "createContent", null);
__decorate([
    (0, graphql_1.Mutation)('updateContent'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateContentInput]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "updateContent", null);
__decorate([
    (0, graphql_1.Mutation)('deleteContent'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "deleteContent", null);
__decorate([
    (0, graphql_1.Mutation)('bulkDeleteContents'),
    __param(0, (0, graphql_1.Args)('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ContentResolver.prototype, "bulkDeleteContents", null);
exports.ContentResolver = ContentResolver = __decorate([
    (0, graphql_1.Resolver)('Content'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentResolver);
//# sourceMappingURL=content.resolver.js.map