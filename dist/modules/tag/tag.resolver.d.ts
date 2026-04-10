import { TagService } from './tag.service';
import { CreateTagInput, UpdateTagInput } from '../../graphql.schema';
export declare class TagResolver {
    private readonly tagService;
    constructor(tagService: TagService);
    tags(isActive?: boolean): Promise<import("./schemas/tag.schema").Tag[]>;
    tag(id: string): Promise<import("./schemas/tag.schema").Tag>;
    tagBySlug(slug: string): Promise<import("./schemas/tag.schema").Tag>;
    createTag(input: CreateTagInput): Promise<import("./schemas/tag.schema").Tag>;
    updateTag(id: string, input: UpdateTagInput): Promise<import("./schemas/tag.schema").Tag>;
    deleteTag(id: string): Promise<boolean>;
}
