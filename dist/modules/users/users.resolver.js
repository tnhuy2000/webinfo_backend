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
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const gql_auth_guard_1 = require("../auth/guards/gql-auth.guard");
let UsersResolver = class UsersResolver {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getUsers() {
        return this.usersService.findAll();
    }
    async getUser(id) {
        return this.usersService.findById(id);
    }
    async getMe(context) {
        const userId = context.req.user.userId;
        const user = await this.usersService.findById(userId);
        if (!user) {
            return null;
        }
        const { password, refreshToken, ...result } = user.toObject();
        return result;
    }
    async createUser(input) {
        const user = await this.usersService.create(input.email, input.password, input.name);
        const { password, refreshToken, ...result } = user.toObject();
        return result;
    }
    async updateUser(id, input) {
        return this.usersService.update(id, input);
    }
    async deleteUser(id) {
        await this.usersService.delete(id);
        return true;
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Query)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Query)('user'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Query)('me'),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "getMe", null);
__decorate([
    (0, graphql_1.Mutation)('createUser'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)('updateUser'),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)('deleteUser'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "deleteUser", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)('User'),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map