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
exports.ContactResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const contact_service_1 = require("./contact.service");
const graphql_schema_1 = require("../../graphql.schema");
let ContactResolver = class ContactResolver {
    contactService;
    constructor(contactService) {
        this.contactService = contactService;
    }
    async createContactMessage(createContactMessageInput) {
        return this.contactService.createMessage(createContactMessageInput);
    }
    async findAllMessages() {
        return this.contactService.findAllMessages();
    }
    async findOneMessage(id) {
        return this.contactService.findOneMessage(id);
    }
    async markAsRead(id) {
        return this.contactService.markAsRead(id);
    }
    async getContactInfo() {
        return this.contactService.getContactInfo();
    }
    async updateContactInfo(updateContactInfoInput) {
        return this.contactService.updateContactInfo(updateContactInfoInput);
    }
};
exports.ContactResolver = ContactResolver;
__decorate([
    (0, graphql_1.Mutation)('createContactMessage'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.CreateContactMessageInput]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "createContactMessage", null);
__decorate([
    (0, graphql_1.Query)('contactMessages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "findAllMessages", null);
__decorate([
    (0, graphql_1.Query)('contactMessage'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "findOneMessage", null);
__decorate([
    (0, graphql_1.Mutation)('markAsRead'),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "markAsRead", null);
__decorate([
    (0, graphql_1.Query)('contactInfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "getContactInfo", null);
__decorate([
    (0, graphql_1.Mutation)('updateContactInfo'),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [graphql_schema_1.UpdateContactInfoInput]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "updateContactInfo", null);
exports.ContactResolver = ContactResolver = __decorate([
    (0, graphql_1.Resolver)('ContactMessage'),
    __metadata("design:paramtypes", [contact_service_1.ContactService])
], ContactResolver);
//# sourceMappingURL=contact.resolver.js.map