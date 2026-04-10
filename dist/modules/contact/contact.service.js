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
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contact_message_entity_1 = require("./entities/contact-message.entity");
const contact_info_entity_1 = require("./entities/contact-info.entity");
let ContactService = class ContactService {
    contactMessageModel;
    contactInfoModel;
    constructor(contactMessageModel, contactInfoModel) {
        this.contactMessageModel = contactMessageModel;
        this.contactInfoModel = contactInfoModel;
    }
    async createMessage(createContactMessageInput) {
        const message = new this.contactMessageModel(createContactMessageInput);
        return message.save();
    }
    async findAllMessages() {
        return this.contactMessageModel.find().sort({ createdAt: -1 }).exec();
    }
    async findOneMessage(id) {
        const message = await this.contactMessageModel.findById(id).exec();
        if (!message) {
            throw new common_1.NotFoundException(`Contact message with ID ${id} not found`);
        }
        return message;
    }
    async markAsRead(id) {
        const message = await this.contactMessageModel
            .findByIdAndUpdate(id, { isRead: true }, { new: true })
            .exec();
        if (!message) {
            throw new common_1.NotFoundException(`Contact message with ID ${id} not found`);
        }
        return message;
    }
    async getContactInfo() {
        let info = await this.contactInfoModel.findOne().exec();
        if (!info) {
            info = new this.contactInfoModel({
                email: 'contact@company.com',
                phone: '+1234567890',
                address: '123 Main St, City, Country',
                workingHours: 'Mon-Fri: 9AM-5PM',
            });
            await info.save();
        }
        return info;
    }
    async updateContactInfo(updateContactInfoInput) {
        let info = await this.contactInfoModel.findOne().exec();
        if (!info) {
            info = new this.contactInfoModel(updateContactInfoInput);
            return info.save();
        }
        const updated = await this.contactInfoModel
            .findByIdAndUpdate(info._id, updateContactInfoInput, { new: true })
            .exec();
        if (!updated) {
            throw new common_1.NotFoundException('Failed to update contact info');
        }
        return updated;
    }
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contact_message_entity_1.ContactMessage.name)),
    __param(1, (0, mongoose_1.InjectModel)(contact_info_entity_1.ContactInfo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], ContactService);
//# sourceMappingURL=contact.service.js.map