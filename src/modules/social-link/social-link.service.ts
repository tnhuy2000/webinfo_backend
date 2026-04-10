import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SocialLink, SocialLinkDocument } from './schemas/social-link.schema';
import {
  CreateSocialLinkInput,
  UpdateSocialLinkInput,
} from '../../graphql.schema';

@Injectable()
export class SocialLinkService {
  constructor(
    @InjectModel(SocialLink.name)
    private readonly socialLinkModel: Model<SocialLinkDocument>,
  ) {}

  async create(input: CreateSocialLinkInput): Promise<SocialLinkDocument> {
    const socialLink = new this.socialLinkModel(input);
    return socialLink.save();
  }

  async findAll(isActive?: boolean): Promise<SocialLinkDocument[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.socialLinkModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<SocialLinkDocument> {
    const socialLink = await this.socialLinkModel.findById(id).exec();
    if (!socialLink) {
      throw new NotFoundException(`SocialLink with ID ${id} not found`);
    }
    return socialLink;
  }

  async update(id: string, input: UpdateSocialLinkInput): Promise<SocialLinkDocument> {
    const socialLink = await this.socialLinkModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!socialLink) {
      throw new NotFoundException(`SocialLink with ID ${id} not found`);
    }
    return socialLink;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.socialLinkModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`SocialLink with ID ${id} not found`);
    }
    return true;
  }
}
