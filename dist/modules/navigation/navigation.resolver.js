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
exports.NavigationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const navigation_service_1 = require("./navigation.service");
const graphql_schema_1 = require("../../graphql.schema");
let NavigationResolver = class NavigationResolver {
    navigationService;
    constructor(navigationService) {
        this.navigationService = navigationService;
    }
    async navigations(isActive) {
        return this.navigationService.findAll(isActive);
    }
    async navigation(id) {
        return this.navigationService.findById(id);
    }
    async createNavigation(input) {
        return this.navigationService.create(input);
    }
    async updateNavigation(id, input) {
        return this.navigationService.update(id, input);
    }
    async deleteNavigation(id) {
        return this.navigationService.delete(id);
    }
};
exports.NavigationResolver = NavigationResolver;
__decorate([
    (0, graphql_1.Query)('navigations'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], NavigationResolver.prototype, "navigations", null);
__decorate([
    (0, graphql_1.Query)('navigation'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NavigationResolver.prototype, "navigation", null);
__decorate([
    (0, graphql_1.Mutation)('createNavigation'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateNavigationInput]),
    __metadata("design:returntype", Promise)
], NavigationResolver.prototype, "createNavigation", null);
__decorate([
    (0, graphql_1.Mutation)('updateNavigation'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateNavigationInput]),
    __metadata("design:returntype", Promise)
], NavigationResolver.prototype, "updateNavigation", null);
__decorate([
    (0, graphql_1.Mutation)('deleteNavigation'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NavigationResolver.prototype, "deleteNavigation", null);
exports.NavigationResolver = NavigationResolver = __decorate([
    (0, graphql_1.Resolver)('Navigation'),
    __metadata("design:paramtypes", [navigation_service_1.NavigationService])
], NavigationResolver);
//# sourceMappingURL=navigation.resolver.js.map