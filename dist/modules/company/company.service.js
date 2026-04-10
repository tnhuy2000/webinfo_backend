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
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const company_entity_1 = require("./entities/company.entity");
let CompanyService = class CompanyService {
    companyModel;
    constructor(companyModel) {
        this.companyModel = companyModel;
    }
    async create(createCompanyInput) {
        const company = new this.companyModel(createCompanyInput);
        return company.save();
    }
    async findAll() {
        return this.companyModel.find().exec();
    }
    async findOne(id) {
        const company = await this.companyModel.findById(id).exec();
        if (!company) {
            throw new common_1.NotFoundException(`Company with ID ${id} not found`);
        }
        return company;
    }
    async update(id, updateCompanyInput) {
        const company = await this.companyModel
            .findByIdAndUpdate(id, updateCompanyInput, { new: true })
            .exec();
        if (!company) {
            throw new common_1.NotFoundException(`Company with ID ${id} not found`);
        }
        return company;
    }
    async remove(id) {
        const result = await this.companyModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Company with ID ${id} not found`);
        }
        return true;
    }
};
exports.CompanyService = CompanyService;
exports.CompanyService = CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_entity_1.Company.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CompanyService);
//# sourceMappingURL=company.service.js.map