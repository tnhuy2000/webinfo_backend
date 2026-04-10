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
exports.ServicesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const services_service_1 = require("./services.service");
const graphql_schema_1 = require("../../graphql.schema");
let ServicesResolver = class ServicesResolver {
    servicesService;
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    async createService(createServiceInput) {
        return this.servicesService.create(createServiceInput);
    }
    async findAll(isActive) {
        return this.servicesService.findAll(isActive);
    }
    async findOne(id) {
        return this.servicesService.findOne(id);
    }
    async updateService(id, updateServiceInput) {
        return this.servicesService.update(id, updateServiceInput);
    }
    async removeService(id) {
        return this.servicesService.remove(id);
    }
};
exports.ServicesResolver = ServicesResolver;
__decorate([
    (0, graphql_1.Mutation)('createService'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateServiceInput]),
    __metadata("design:returntype", Promise)
], ServicesResolver.prototype, "createService", null);
__decorate([
    (0, graphql_1.Query)('services'),
    __param(0, (0, graphql_1.Args)('isActive')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], ServicesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)('service'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)('updateService'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.UpdateServiceInput]),
    __metadata("design:returntype", Promise)
], ServicesResolver.prototype, "updateService", null);
__decorate([
    (0, graphql_1.Mutation)('removeService'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ServicesResolver.prototype, "removeService", null);
exports.ServicesResolver = ServicesResolver = __decorate([
    (0, graphql_1.Resolver)('Service'),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], ServicesResolver);
//# sourceMappingURL=services.resolver.js.map