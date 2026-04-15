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
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const setting_schema_1 = require("./schemas/setting.schema");
const graphql_schema_1 = require("../../graphql.schema");
let SettingsService = class SettingsService {
    settingModel;
    constructor(settingModel) {
        this.settingModel = settingModel;
    }
    async create(createSettingDto) {
        const existingSetting = await this.settingModel
            .findOne({ key: createSettingDto.key })
            .exec();
        if (existingSetting) {
            throw new common_1.ConflictException('Setting key already exists');
        }
        const newSetting = new this.settingModel(createSettingDto);
        return newSetting.save();
    }
    async findAll(category) {
        const filter = category ? { category } : {};
        return this.settingModel.find(filter).sort({ isDefault: 1 }).exec();
    }
    async findByKey(key) {
        const setting = await this.settingModel.findOne({ key }).exec();
        if (!setting) {
            throw new common_1.NotFoundException('Setting not found');
        }
        return setting;
    }
    async findPublicSettings() {
        const settings = await this.settingModel
            .find({ isPublic: true })
            .exec();
        return settings;
    }
    async getAllAsObject() {
        const settings = await this.settingModel.find().exec();
        const settingsObject = {};
        settings.forEach((setting) => {
            settingsObject[setting.key] = setting.value;
        });
        return settingsObject;
    }
    async update(key, updateSettingDto) {
        const existingSetting = await this.settingModel.findOne({ key }).exec();
        if (!existingSetting) {
            throw new common_1.NotFoundException('Setting not found');
        }
        if (existingSetting.isDefault) {
            const setting = await this.settingModel
                .findOneAndUpdate({ key }, { value: updateSettingDto.value }, { new: true })
                .exec();
            return setting;
        }
        const setting = await this.settingModel
            .findOneAndUpdate({ key }, updateSettingDto, { new: true })
            .exec();
        return setting;
    }
    async bulkUpdate(updates) {
        let updated = 0;
        for (const update of updates) {
            const result = await this.settingModel
                .updateOne({ key: update.key }, { value: update.value })
                .exec();
            if (result.modifiedCount > 0) {
                updated++;
            }
        }
        return { updated };
    }
    async delete(key) {
        const setting = await this.settingModel.findOne({ key }).exec();
        if (!setting) {
            throw new common_1.NotFoundException('Setting not found');
        }
        if (setting.isDefault) {
            throw new common_1.BadRequestException('Cannot delete default system settings');
        }
        await this.settingModel.findOneAndDelete({ key }).exec();
    }
    async initializeDefaults() {
        const defaults = [
            {
                key: 'ADMIN_LOGO',
                value: '',
                category: graphql_schema_1.SettingCategory.GENERAL,
                description: 'Admin panel logo',
                type: 'IMAGE',
                isPublic: false,
                isDefault: true,
            },
            {
                key: 'SITE_NAME',
                value: 'My Admin CMS',
                category: graphql_schema_1.SettingCategory.GENERAL,
                description: 'Website name',
                type: 'STRING',
                isPublic: true,
                isDefault: true,
            },
            {
                key: 'SITE_LOGO',
                value: '',
                category: graphql_schema_1.SettingCategory.GENERAL,
                description: 'Public website logo',
                type: 'IMAGE',
                isPublic: true,
                isDefault: true,
            },
            {
                key: 'SITE_DESCRIPTION',
                value: 'A powerful CMS built with NestJS',
                category: graphql_schema_1.SettingCategory.SEO,
                description: 'Website meta description',
                type: 'STRING',
                isPublic: true,
                isDefault: true,
            },
            {
                key: 'SEO_KEYWORDS',
                value: 'cms, nestjs, admin',
                category: graphql_schema_1.SettingCategory.SEO,
                description: 'SEO keywords',
                type: 'STRING',
                isPublic: true,
                isDefault: true,
            },
            {
                key: 'ADMIN_EMAIL',
                value: 'admin@example.com',
                category: graphql_schema_1.SettingCategory.CONTACT,
                description: 'Administrator email',
                type: 'STRING',
                isPublic: false,
                isDefault: true,
            },
            {
                key: 'ITEMS_PER_PAGE',
                value: 10,
                category: graphql_schema_1.SettingCategory.GENERAL,
                description: 'Number of items per page',
                type: 'NUMBER',
                isPublic: false,
                isDefault: true,
            },
        ];
        for (const defaultSetting of defaults) {
            const exists = await this.settingModel
                .findOne({ key: defaultSetting.key })
                .exec();
            if (!exists) {
                await new this.settingModel(defaultSetting).save();
            }
        }
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(setting_schema_1.Setting.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SettingsService);
//# sourceMappingURL=settings.service.js.map