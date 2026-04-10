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
exports.ProjectResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const project_service_1 = require("./project.service");
const graphql_schema_1 = require("../../graphql.schema");
let ProjectResolver = class ProjectResolver {
    projectService;
    constructor(projectService) {
        this.projectService = projectService;
    }
    async projects(isActive, isFeatured, status) {
        return this.projectService.findAll(isActive, isFeatured, status);
    }
    async project(id) {
        return this.projectService.findById(id);
    }
    async projectBySlug(slug) {
        return this.projectService.findBySlug(slug);
    }
    async createProject(input) {
        return this.projectService.create(input);
    }
    async updateProject(id, input) {
        return this.projectService.update(id, input);
    }
    async deleteProject(id) {
        return this.projectService.delete(id);
    }
};
exports.ProjectResolver = ProjectResolver;
__decorate([
    (0, graphql_1.Query)('projects'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __param(1, (0, graphql_1.Args)('isFeatured')),
    __param(2, (0, graphql_1.Args)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Boolean, String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "projects", null);
__decorate([
    (0, graphql_1.Query)('project'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "project", null);
__decorate([
    (0, graphql_1.Query)('projectBySlug'),
    __param(0, (0, graphql_1.Args)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "projectBySlug", null);
__decorate([
    (0, graphql_1.Mutation)('createProject'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "createProject", null);
__decorate([
    (0, graphql_1.Mutation)('updateProject'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateProjectInput]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "updateProject", null);
__decorate([
    (0, graphql_1.Mutation)('deleteProject'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectResolver.prototype, "deleteProject", null);
exports.ProjectResolver = ProjectResolver = __decorate([
    (0, graphql_1.Resolver)('Project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectResolver);
//# sourceMappingURL=project.resolver.js.map