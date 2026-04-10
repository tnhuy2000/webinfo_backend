import { Model } from 'mongoose';
import { ContentDocument } from './schemas/content.schema';
import { CreateContentInput, PaginatedContent, QueryContentInput, UpdateContentInput } from 'src/graphql.schema';
export declare class ContentService {
    private contentModel;
    constructor(contentModel: Model<ContentDocument>);
    create(input: CreateContentInput): Promise<ContentDocument>;
    findAll(query: QueryContentInput): Promise<PaginatedContent>;
    findOne(id: string): Promise<ContentDocument>;
    findBySlug(slug: string): Promise<ContentDocument>;
    update(id: string, updateContentDto: UpdateContentInput): Promise<ContentDocument>;
    delete(id: string): Promise<void>;
    bulkDelete(ids: string[]): Promise<{
        deletedCount: number;
    }>;
}
