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
exports.SkillResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const skill_service_1 = require("./skill.service");
const graphql_schema_1 = require("../../graphql.schema");
let SkillResolver = class SkillResolver {
    skillService;
    constructor(skillService) {
        this.skillService = skillService;
    }
    async skills(isActive) {
        return this.skillService.findAll(isActive);
    }
    async skill(id) {
        return this.skillService.findById(id);
    }
    async createSkill(input) {
        return this.skillService.create(input);
    }
    async updateSkill(id, input) {
        return this.skillService.update(id, input);
    }
    async deleteSkill(id) {
        return this.skillService.delete(id);
    }
};
exports.SkillResolver = SkillResolver;
__decorate([
    (0, graphql_1.Query)('skills'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "skills", null);
__decorate([
    (0, graphql_1.Query)('skill'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "skill", null);
__decorate([
    (0, graphql_1.Mutation)('createSkill'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateSkillInput]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "createSkill", null);
__decorate([
    (0, graphql_1.Mutation)('updateSkill'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateSkillInput]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "updateSkill", null);
__decorate([
    (0, graphql_1.Mutation)('deleteSkill'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "deleteSkill", null);
exports.SkillResolver = SkillResolver = __decorate([
    (0, graphql_1.Resolver)('Skill'),
    __metadata("design:paramtypes", [skill_service_1.SkillService])
], SkillResolver);
//# sourceMappingURL=skill.resolver.js.map