import { Model } from 'mongoose';
import { Tag, TagDocument } from './schemas/tag.schema';
import { CreateTagInput, UpdateTagInput } from '../../graphql.schema';
export declare class TagService {
    private readonly tagModel;
    constructor(tagModel: Model<TagDocument>);
    create(input: CreateTagInput): Promise<Tag>;
    findAll(isActive?: boolean): Promise<Tag[]>;
    findById(id: string): Promise<Tag>;
    findBySlug(slug: string): Promise<Tag>;
    update(id: string, input: UpdateTagInput): Promise<Tag>;
    delete(id: string): Promise<boolean>;
}
