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
exports.WorkExperienceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const work_experience_schema_1 = require("./schemas/work-experience.schema");
let WorkExperienceService = class WorkExperienceService {
    workExperienceModel;
    constructor(workExperienceModel) {
        this.workExperienceModel = workExperienceModel;
    }
    async create(input) {
        const workExperience = new this.workExperienceModel(input);
        return workExperience.save();
    }
    async findAll(isActive) {
        const filter = isActive !== undefined ? { isActive } : {};
        return this.workExperienceModel.find(filter).sort({ order: 1 }).exec();
    }
    async findById(id) {
        const workExperience = await this.workExperienceModel.findById(id).exec();
        if (!workExperience) {
            throw new common_1.NotFoundException(`WorkExperience with ID ${id} not found`);
        }
        return workExperience;
    }
    async update(id, input) {
        const workExperience = await this.workExperienceModel
            .findByIdAndUpdate(id, input, { new: true })
            .exec();
        if (!workExperience) {
            throw new common_1.NotFoundException(`WorkExperience with ID ${id} not found`);
        }
        return workExperience;
    }
    async delete(id) {
        const result = await this.workExperienceModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`WorkExperience with ID ${id} not found`);
        }
        return true;
    }
};
exports.WorkExperienceService = WorkExperienceService;
exports.WorkExperienceService = WorkExperienceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(work_experience_schema_1.WorkExperience.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], WorkExperienceService);
//# sourceMappingURL=work-experience.service.js.map