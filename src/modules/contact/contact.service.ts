import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ContactMessage,
  ContactMessageDocument,
} from './entities/contact-message.entity';
import {
  ContactInfo,
  ContactInfoDocument,
} from './entities/contact-info.entity';
import {
  CreateContactMessageInput,
  UpdateContactInfoInput,
} from '../../graphql.schema';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(ContactMessage.name)
    private readonly contactMessageModel: Model<ContactMessageDocument>,
    @InjectModel(ContactInfo.name)
    private readonly contactInfoModel: Model<ContactInfoDocument>,
  ) {}

  // Contact Messages
  async createMessage(
    createContactMessageInput: CreateContactMessageInput,
  ): Promise<ContactMessage> {
    const message = new this.contactMessageModel(createContactMessageInput);
    return message.save();
  }

  async findAllMessages(): Promise<ContactMessage[]> {
    return this.contactMessageModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOneMessage(id: string): Promise<ContactMessage> {
    const message = await this.contactMessageModel.findById(id).exec();
    if (!message) {
      throw new NotFoundException(`Contact message with ID ${id} not found`);
    }
    return message;
  }

  async markAsRead(id: string): Promise<ContactMessage> {
    const message = await this.contactMessageModel
      .findByIdAndUpdate(id, { isRead: true }, { new: true })
      .exec();
    if (!message) {
      throw new NotFoundException(`Contact message with ID ${id} not found`);
    }
    return message;
  }

  // Contact Info
  async getContactInfo(): Promise<ContactInfo> {
    let info = await this.contactInfoModel.findOne().exec();
    if (!info) {
      // Create default contact info if not exists
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

  async updateContactInfo(
    updateContactInfoInput: UpdateContactInfoInput,
  ): Promise<ContactInfo> {
    let info = await this.contactInfoModel.findOne().exec();
    if (!info) {
      info = new this.contactInfoModel(updateContactInfoInput);
      return info.save();
    }
    const updated = await this.contactInfoModel
      .findByIdAndUpdate(info._id, updateContactInfoInput, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException('Failed to update contact info');
    }
    return updated;
  }
}
