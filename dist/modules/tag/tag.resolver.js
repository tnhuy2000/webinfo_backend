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
exports.TagResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tag_service_1 = require("./tag.service");
const graphql_schema_1 = require("../../graphql.schema");
let TagResolver = class TagResolver {
    tagService;
    constructor(tagService) {
        this.tagService = tagService;
    }
    async tags(isActive) {
        return this.tagService.findAll(isActive);
    }
    async tag(id) {
        return this.tagService.findById(id);
    }
    async tagBySlug(slug) {
        return this.tagService.findBySlug(slug);
    }
    async createTag(input) {
        return this.tagService.create(input);
    }
    async updateTag(id, input) {
        return this.tagService.update(id, input);
    }
    async deleteTag(id) {
        return this.tagService.delete(id);
    }
};
exports.TagResolver = TagResolver;
__decorate([
    (0, graphql_1.Query)('tags'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "tags", null);
__decorate([
    (0, graphql_1.Query)('tag'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "tag", null);
__decorate([
    (0, graphql_1.Query)('tagBySlug'),
    __param(0, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "tagBySlug", null);
__decorate([
    (0, graphql_1.Mutation)('createTag'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateTagInput]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "createTag", null);
__decorate([
    (0, graphql_1.Mutation)('updateTag'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateTagInput]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "updateTag", null);
__decorate([
    (0, graphql_1.Mutation)('deleteTag'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagResolver.prototype, "deleteTag", null);
exports.TagResolver = TagResolver = __decorate([
    (0, graphql_1.Resolver)('Tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagResolver);
//# sourceMappingURL=tag.resolver.js.map