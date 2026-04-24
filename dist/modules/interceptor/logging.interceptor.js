"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const operators_1 = require("rxjs/operators");
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const now = Date.now();
        const contextType = context.getType();
        if (contextType === 'graphql') {
            return this.handleGraphQL(context, next, now);
        }
        if (contextType === 'http') {
            return this.handleHttp(context, next, now);
        }
        return next.handle();
    }
    handleGraphQL(context, next, now) {
        const gqlCtx = graphql_1.GqlExecutionContext.create(context);
        const info = gqlCtx.getInfo();
        const actionType = info?.parentType?.name || 'GraphQL';
        const functionName = info?.fieldName || 'unknown';
        this.showLogAction(actionType, functionName, now);
        return next.handle().pipe((0, operators_1.tap)({ error: (err) => this.showLogError(err) }));
    }
    handleHttp(context, next, now) {
        const req = context.switchToHttp().getRequest();
        const { method, url } = req;
        this.showLogAction(`HTTP ${method}`, url, now);
        return next.handle().pipe((0, operators_1.tap)({
            next: () => this.showLogSuccess(`HTTP ${method}`, url, now),
            error: (err) => this.showLogError(err),
        }));
    }
    showLogAction(actionType, functionName, now) {
        console.log('🚀', `\x1b[32m[${actionType}]\x1b[0m`, '»', functionName, `\x1b[33m[+${Date.now() - now}ms]\x1b[0m`, new Date().toLocaleString(), '👌');
    }
    showLogSuccess(actionType, functionName, now) {
        console.log('✅', `\x1b[32m[${actionType}]\x1b[0m`, '»', functionName, `\x1b[33m[+${Date.now() - now}ms]\x1b[0m`);
    }
    showLogError(error) {
        console.error('❌', `\x1b[31m[Interceptor: ${(error + '').replace(/(Error: |Authentication|UserInputError: )+/g, '')}]\x1b[0m`, '😢');
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);
//# sourceMappingURL=logging.interceptor.js.map