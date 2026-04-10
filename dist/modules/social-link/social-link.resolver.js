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
exports.SocialLinkResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const social_link_service_1 = require("./social-link.service");
const graphql_schema_1 = require("../../graphql.schema");
let SocialLinkResolver = class SocialLinkResolver {
    socialLinkService;
    constructor(socialLinkService) {
        this.socialLinkService = socialLinkService;
    }
    async socialLinks(isActive) {
        return this.socialLinkService.findAll(isActive);
    }
    async socialLink(id) {
        return this.socialLinkService.findById(id);
    }
    async createSocialLink(input) {
        return this.socialLinkService.create(input);
    }
    async updateSocialLink(id, input) {
        return this.socialLinkService.update(id, input);
    }
    async deleteSocialLink(id) {
        return this.socialLinkService.delete(id);
    }
};
exports.SocialLinkResolver = SocialLinkResolver;
__decorate([
    (0, graphql_1.Query)('socialLinks'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], SocialLinkResolver.prototype, "socialLinks", null);
__decorate([
    (0, graphql_1.Query)('socialLink'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SocialLinkResolver.prototype, "socialLink", null);
__decorate([
    (0, graphql_1.Mutation)('createSocialLink'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateSocialLinkInput]),
    __metadata("design:returntype", Promise)
], SocialLinkResolver.prototype, "createSocialLink", null);
__decorate([
    (0, graphql_1.Mutation)('updateSocialLink'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateSocialLinkInput]),
    __metadata("design:returntype", Promise)
], SocialLinkResolver.prototype, "updateSocialLink", null);
__decorate([
    (0, graphql_1.Mutation)('deleteSocialLink'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SocialLinkResolver.prototype, "deleteSocialLink", null);
exports.SocialLinkResolver = SocialLinkResolver = __decorate([
    (0, graphql_1.Resolver)('SocialLink'),
    __metadata("design:paramtypes", [social_link_service_1.SocialLinkService])
], SocialLinkResolver);
//# sourceMappingURL=social-link.resolver.js.map