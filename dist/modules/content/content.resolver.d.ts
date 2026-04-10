import { ContentService } from './content.service';
import { CreateContentInput, QueryContentInput, UpdateContentInput } from 'src/graphql.schema';
export declare class ContentResolver {
    private readonly contentService;
    constructor(contentService: ContentService);
    getContents(query: QueryContentInput): Promise<import("src/graphql.schema").PaginatedContent>;
    getContent(id: string): Promise<import("./schemas/content.schema").ContentDocument>;
    getContentBySlug(slug: string): Promise<import("./schemas/content.schema").ContentDocument>;
    createContent(input: CreateContentInput): Promise<import("./schemas/content.schema").ContentDocument>;
    updateContent(id: string, input: UpdateContentInput): Promise<import("./schemas/content.schema").ContentDocument>;
    deleteContent(id: string): Promise<boolean>;
    bulkDeleteContents(ids: string[]): Promise<number>;
}
