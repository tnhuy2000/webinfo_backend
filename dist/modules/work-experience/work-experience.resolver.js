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
exports.WorkExperienceResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const work_experience_service_1 = require("./work-experience.service");
const graphql_schema_1 = require("../../graphql.schema");
let WorkExperienceResolver = class WorkExperienceResolver {
    workExperienceService;
    constructor(workExperienceService) {
        this.workExperienceService = workExperienceService;
    }
    async workExperiences(isActive) {
        return this.workExperienceService.findAll(isActive);
    }
    async workExperience(id) {
        return this.workExperienceService.findById(id);
    }
    async createWorkExperience(input) {
        return this.workExperienceService.create(input);
    }
    async updateWorkExperience(id, input) {
        return this.workExperienceService.update(id, input);
    }
    async deleteWorkExperience(id) {
        return this.workExperienceService.delete(id);
    }
};
exports.WorkExperienceResolver = WorkExperienceResolver;
__decorate([
    (0, graphql_1.Query)('workExperiences'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], WorkExperienceResolver.prototype, "workExperiences", null);
__decorate([
    (0, graphql_1.Query)('workExperience'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkExperienceResolver.prototype, "workExperience", null);
__decorate([
    (0, graphql_1.Mutation)('createWorkExperience'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateWorkExperienceInput]),
    __metadata("design:returntype", Promise)
], WorkExperienceResolver.prototype, "createWorkExperience", null);
__decorate([
    (0, graphql_1.Mutation)('updateWorkExperience'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateWorkExperienceInput]),
    __metadata("design:returntype", Promise)
], WorkExperienceResolver.prototype, "updateWorkExperience", null);
__decorate([
    (0, graphql_1.Mutation)('deleteWorkExperience'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkExperienceResolver.prototype, "deleteWorkExperience", null);
exports.WorkExperienceResolver = WorkExperienceResolver = __decorate([
    (0, graphql_1.Resolver)('WorkExperience'),
    __metadata("design:paramtypes", [work_experience_service_1.WorkExperienceService])
], WorkExperienceResolver);
//# sourceMappingURL=work-experience.resolver.js.map