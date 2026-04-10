import { Document } from 'mongoose';
export type ContentDocument = Content & Document;
export declare enum ContentType {
    PAGE = "page",
    POST = "post",
    BLOG = "blog",
    BANNER = "banner",
    MENU = "menu"
}
export declare enum ContentStatus {
    DRAFT = "draft",
    PUBLISHED = "published",
    ARCHIVED = "archived"
}
export declare class Content {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    type: ContentType;
    status: ContentStatus;
    featuredImage: string;
    tags: string[];
    categories: string[];
    metadata: Record<string, any>;
    author: string;
    publishedAt?: Date;
    order: number;
    isActive: boolean;
}
export declare const ContentSchema: import("mongoose").Schema<Content, import("mongoose").Model<Content, any, any, any, Document<unknown, any, Content, any, import("mongoose").DefaultSchemaOptions> & Content & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Content>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Content, Document<unknown, {}, Content, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    excerpt?: import("mongoose").SchemaDefinitionProperty<string, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<ContentType, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<ContentStatus, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    featuredImage?: import("mongoose").SchemaDefinitionProperty<string, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    categories?: import("mongoose").SchemaDefinitionProperty<string[], Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    metadata?: import("mongoose").SchemaDefinitionProperty<Record<string, any>, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    author?: import("mongoose").SchemaDefinitionProperty<string, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    publishedAt?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Content, Document<unknown, {}, Content, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Content & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Content>;
