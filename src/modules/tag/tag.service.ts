import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag, TagDocument } from './schemas/tag.schema';
import { CreateTagInput, UpdateTagInput } from '../../graphql.schema';

@Injectable()
export class TagService {
  constructor(
    @InjectModel(Tag.name)
    private readonly tagModel: Model<TagDocument>,
  ) {}

  async create(input: CreateTagInput): Promise<Tag> {
    const tag = new this.tagModel(input);
    return tag.save();
  }

  async findAll(isActive?: boolean): Promise<Tag[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.tagModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<Tag> {
    const tag = await this.tagModel.findById(id).exec();
    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }
    return tag;
  }

  async findBySlug(slug: string): Promise<Tag> {
    const tag = await this.tagModel.findOne({ slug }).exec();
    if (!tag) {
      throw new NotFoundException(`Tag with slug ${slug} not found`);
    }
    return tag;
  }

  async update(id: string, input: UpdateTagInput): Promise<Tag> {
    const tag = await this.tagModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }
    return tag;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.tagModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }
    return true;
  }
}
