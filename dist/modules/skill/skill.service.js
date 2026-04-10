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
exports.SkillService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const skill_schema_1 = require("./schemas/skill.schema");
let SkillService = class SkillService {
    skillModel;
    constructor(skillModel) {
        this.skillModel = skillModel;
    }
    async create(input) {
        const skill = new this.skillModel(input);
        return skill.save();
    }
    async findAll(isActive) {
        const filter = isActive !== undefined ? { isActive } : {};
        return this.skillModel.find(filter).sort({ order: 1 }).exec();
    }
    async findById(id) {
        const skill = await this.skillModel.findById(id).exec();
        if (!skill) {
            throw new common_1.NotFoundException(`Skill with ID ${id} not found`);
        }
        return skill;
    }
    async update(id, input) {
        const skill = await this.skillModel
            .findByIdAndUpdate(id, input, { new: true })
            .exec();
        if (!skill) {
            throw new common_1.NotFoundException(`Skill with ID ${id} not found`);
        }
        return skill;
    }
    async delete(id) {
        const result = await this.skillModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Skill with ID ${id} not found`);
        }
        return true;
    }
};
exports.SkillService = SkillService;
exports.SkillService = SkillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(skill_schema_1.Skill.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SkillService);
//# sourceMappingURL=skill.service.js.map