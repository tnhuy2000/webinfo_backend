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
exports.TeamResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const team_service_1 = require("./team.service");
const graphql_schema_1 = require("../../graphql.schema");
let TeamResolver = class TeamResolver {
    teamService;
    constructor(teamService) {
        this.teamService = teamService;
    }
    async createTeamMember(createTeamMemberInput) {
        return this.teamService.create(createTeamMemberInput);
    }
    async findAll(isActive) {
        return this.teamService.findAll(isActive);
    }
    async findOne(id) {
        return this.teamService.findOne(id);
    }
    async updateTeamMember(id, updateTeamMemberInput) {
        return this.teamService.update(id, updateTeamMemberInput);
    }
    async removeTeamMember(id) {
        return this.teamService.remove(id);
    }
};
exports.TeamResolver = TeamResolver;
__decorate([
    (0, graphql_1.Mutation)('createTeamMember'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateTeamMemberInput]),
    __metadata("design:returntype", Promise)
], TeamResolver.prototype, "createTeamMember", null);
__decorate([
    (0, graphql_1.Query)('teamMembers'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], TeamResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('teamMember'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateTeamMember'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateTeamMemberInput]),
    __metadata("design:returntype", Promise)
], TeamResolver.prototype, "updateTeamMember", null);
__decorate([
    (0, graphql_1.Mutation)('removeTeamMember'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeamResolver.prototype, "removeTeamMember", null);
exports.TeamResolver = TeamResolver = __decorate([
    (0, graphql_1.Resolver)('TeamMember'),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamResolver);
//# sourceMappingURL=team.resolver.js.map