import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content, ContentDocument } from './schemas/content.schema';
import { CreateContentInput, PaginatedContent, QueryContentInput, UpdateContentInput } from 'src/graphql.schema';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name) private contentModel: Model<ContentDocument>,
  ) {}

  async create(input: CreateContentInput): Promise<ContentDocument> {
    const existingContent = await this.contentModel
      .findOne({ slug: input.slug })
      .exec();

    if (existingContent) {
      throw new ConflictException('Slug already exists');
    }

    const newContent = new this.contentModel(input);
    return newContent.save();
  }

  async findAll(query: QueryContentInput): Promise<PaginatedContent> {
    const { type, status, search, page, limit, sortBy, sortOrder } = query;

    const filter: any = {};

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
    if(!query.page) query.page = 1
    if(!query.limit) query.limit = 100
     if(!query.sortBy) query.sortBy = 'createdAt'
    const skip = (query.page - 1) * query.limit;
    const sortOptions: any = {};
    sortOptions[query.sortBy] = sortOrder === 'asc' ? 1 : -1;

    const [data, total] : [ContentDocument[], number]= await Promise.all([
      this.contentModel
        .find(filter)
        .sort(sortOptions)
        .skip(skip)
        .limit(query.limit)
        .exec(),
      this.contentModel.countDocuments(filter).exec(),
    ]);

    return {
      // data: data ?? [],
      // data: [],
      total,
      page: query.page,
      limit: query.limit,
      totalPages: Math.ceil(total / query.limit),
    };
  }

  async findOne(id: string): Promise<ContentDocument> {
    const content = await this.contentModel.findById(id).exec();
    if (!content) {
      throw new NotFoundException('Content not found');
    }
    return content;
  }

  async findBySlug(slug: string): Promise<ContentDocument> {
    const content = await this.contentModel.findOne({ slug }).exec();
    if (!content) {
      throw new NotFoundException('Content not found');
    }
    return content;
  }

  async update(
    id: string,
    updateContentDto: UpdateContentInput,
  ): Promise<ContentDocument> {
    if (updateContentDto.slug) {
      const existingContent = await this.contentModel
        .findOne({ slug: updateContentDto.slug, _id: { $ne: id } })
        .exec();

      if (existingContent) {
        throw new ConflictException('Slug already exists');
      }
    }

    const content = await this.contentModel
      .findByIdAndUpdate(id, updateContentDto, { new: true })
      .exec();

    if (!content) {
      throw new NotFoundException('Content not found');
    }

    return content;
  }

  async delete(id: string): Promise<void> {
    const result = await this.contentModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException('Content not found');
    }
  }

  async bulkDelete(ids: string[]): Promise<{ deletedCount: number }> {
    const result = await this.contentModel
      .deleteMany({ _id: { $in: ids } })
      .exec();
    return { deletedCount: result.deletedCount || 0 };
  }
}
