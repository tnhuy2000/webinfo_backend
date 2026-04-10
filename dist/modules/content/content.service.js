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
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const content_schema_1 = require("./schemas/content.schema");
let ContentService = class ContentService {
    contentModel;
    constructor(contentModel) {
        this.contentModel = contentModel;
    }
    async create(input) {
        const existingContent = await this.contentModel
            .findOne({ slug: input.slug })
            .exec();
        if (existingContent) {
            throw new common_1.ConflictException('Slug already exists');
        }
        const newContent = new this.contentModel(input);
        return newContent.save();
    }
    async findAll(query) {
        const { type, status, search, page, limit, sortBy, sortOrder } = query;
        const filter = {};
        if (type) {
            filter.type = type;
        }
        if (status) {
            filter.status = status;
        }
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
            ];
        }
        if (!query.page)
            query.page = 1;
        if (!query.limit)
            query.limit = 100;
        if (!query.sortBy)
            query.sortBy = 'createdAt';
        const skip = (query.page - 1) * query.limit;
        const sortOptions = {};
        sortOptions[query.sortBy] = sortOrder === 'asc' ? 1 : -1;
        const [data, total] = await Promise.all([
            this.contentModel
                .find(filter)
                .sort(sortOptions)
                .skip(skip)
                .limit(query.limit)
                .exec(),
            this.contentModel.countDocuments(filter).exec(),
        ]);
        return {
            total,
            page: query.page,
            limit: query.limit,
            totalPages: Math.ceil(total / query.limit),
        };
    }
    async findOne(id) {
        const content = await this.contentModel.findById(id).exec();
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async findBySlug(slug) {
        const content = await this.contentModel.findOne({ slug }).exec();
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async update(id, updateContentDto) {
        if (updateContentDto.slug) {
            const existingContent = await this.contentModel
                .findOne({ slug: updateContentDto.slug, _id: { $ne: id } })
                .exec();
            if (existingContent) {
                throw new common_1.ConflictException('Slug already exists');
            }
        }
        const content = await this.contentModel
            .findByIdAndUpdate(id, updateContentDto, { new: true })
            .exec();
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        return content;
    }
    async delete(id) {
        const result = await this.contentModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Content not found');
        }
    }
    async bulkDelete(ids) {
        const result = await this.contentModel
            .deleteMany({ _id: { $in: ids } })
            .exec();
        return { deletedCount: result.deletedCount || 0 };
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(content_schema_1.Content.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContentService);
//# sourceMappingURL=content.service.js.map