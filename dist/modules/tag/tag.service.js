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
exports.TagService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tag_schema_1 = require("./schemas/tag.schema");
let TagService = class TagService {
    tagModel;
    constructor(tagModel) {
        this.tagModel = tagModel;
    }
    async create(input) {
        const tag = new this.tagModel(input);
        return tag.save();
    }
    async findAll(isActive) {
        const filter = isActive !== undefined ? { isActive } : {};
        return this.tagModel.find(filter).sort({ order: 1 }).exec();
    }
    async findById(id) {
        const tag = await this.tagModel.findById(id).exec();
        if (!tag) {
            throw new common_1.NotFoundException(`Tag with ID ${id} not found`);
        }
        return tag;
    }
    async findBySlug(slug) {
        const tag = await this.tagModel.findOne({ slug }).exec();
        if (!tag) {
            throw new common_1.NotFoundException(`Tag with slug ${slug} not found`);
        }
        return tag;
    }
    async update(id, input) {
        const tag = await this.tagModel
            .findByIdAndUpdate(id, input, { new: true })
            .exec();
        if (!tag) {
            throw new common_1.NotFoundException(`Tag with ID ${id} not found`);
        }
        return tag;
    }
    async delete(id) {
        const result = await this.tagModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Tag with ID ${id} not found`);
        }
        return true;
    }
};
exports.TagService = TagService;
exports.TagService = TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(tag_schema_1.Tag.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TagService);
//# sourceMappingURL=tag.service.js.map