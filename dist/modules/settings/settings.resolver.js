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
exports.SettingsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const settings_service_1 = require("./settings.service");
const gql_auth_guard_1 = require("../auth/guards/gql-auth.guard");
let SettingsResolver = class SettingsResolver {
    settingsService;
    constructor(settingsService) {
        this.settingsService = settingsService;
    }
    async getSettings(category) {
        return this.settingsService.findAll(category);
    }
    async getSetting(key) {
        return this.settingsService.findByKey(key);
    }
    async getPublicSettings() {
        return this.settingsService.findPublicSettings();
    }
    async getAllSettingsAsObject() {
        return this.settingsService.getAllAsObject();
    }
    async createSetting(input) {
        return this.settingsService.create(input);
    }
    async updateSetting(key, input) {
        return this.settingsService.update(key, input);
    }
    async bulkUpdateSettings(settings) {
        const result = await this.settingsService.bulkUpdate(settings);
        return result.updated;
    }
    async deleteSetting(key) {
        await this.settingsService.delete(key);
        return true;
    }
    async initializeDefaultSettings() {
        await this.settingsService.initializeDefaults();
        return true;
    }
};
exports.SettingsResolver = SettingsResolver;
__decorate([
    (0, graphql_1.Query)('settings'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "getSettings", null);
__decorate([
    (0, graphql_1.Query)('setting'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "getSetting", null);
__decorate([
    (0, graphql_1.Query)('getPublicSettings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "getPublicSettings", null);
__decorate([
    (0, graphql_1.Query)('allSettingsAsObject'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "getAllSettingsAsObject", null);
__decorate([
    (0, graphql_1.Mutation)('createSetting'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "createSetting", null);
__decorate([
    (0, graphql_1.Mutation)('updateSetting'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('key')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "updateSetting", null);
__decorate([
    (0, graphql_1.Mutation)('bulkUpdateSettings'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('settings')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "bulkUpdateSettings", null);
__decorate([
    (0, graphql_1.Mutation)('deleteSetting'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('key')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "deleteSetting", null);
__decorate([
    (0, graphql_1.Mutation)('initializeDefaultSettings'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingsResolver.prototype, "initializeDefaultSettings", null);
exports.SettingsResolver = SettingsResolver = __decorate([
    (0, graphql_1.Resolver)('Setting'),
    __metadata("design:paramtypes", [settings_service_1.SettingsService])
], SettingsResolver);
//# sourceMappingURL=settings.resolver.js.map