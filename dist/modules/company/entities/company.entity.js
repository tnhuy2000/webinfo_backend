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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanySchema = exports.Company = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
const id_helper_1 = require("../../../common/utils/id.helper");
class Address {
    street;
    city;
    country;
    zipCode;
}
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "zipCode", void 0);
let Company = class Company {
    _id;
    name;
    description;
    mission;
    vision;
    founded;
    employees;
    address;
    createdAt;
    updatedAt;
};
exports.Company = Company;
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: () => id_helper_1.IdHelper.generate() }),
    __metadata("design:type", String)
], Company.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Company.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "mission", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "vision", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Company.prototype, "founded", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Company.prototype, "employees", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Address }),
    __metadata("design:type", Address)
], Company.prototype, "address", void 0);
exports.Company = Company = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.COMPANIES,
    })
], Company);
exports.CompanySchema = mongoose_1.SchemaFactory.createForClass(Company);
//# sourceMappingURL=company.entity.js.map