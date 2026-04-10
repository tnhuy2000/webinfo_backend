import { Document } from 'mongoose';
import { LinkDocument, ProjectImage, ProjectLink, ProjectStatus } from 'src/graphql.schema';
export type ProjectDocument = Project & Document;
export declare class Project {
    title: string;
    slug: string;
    description?: string;
    content?: string;
    excerpt?: string;
    thumbnail?: LinkDocument;
    images: ProjectImage[];
    tags: string[];
    technologies: string[];
    links: ProjectLink[];
    status: ProjectStatus;
    startDate?: Date;
    endDate?: Date;
    isFeatured: boolean;
    order: number;
    isActive: boolean;
}
export declare const ProjectSchema: import("mongoose").Schema<Project, import("mongoose").Model<Project, any, any, any, Document<unknown, any, Project, any, import("mongoose").DefaultSchemaOptions> & Project & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Project>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Project, Document<unknown, {}, Project, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    slug?: import("mongoose").SchemaDefinitionProperty<string, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    content?: import("mongoose").SchemaDefinitionProperty<string | undefined, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    excerpt?: import("mongoose").SchemaDefinitionProperty<string | undefined, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    thumbnail?: import("mongoose").SchemaDefinitionProperty<LinkDocument | undefined, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    images?: import("mongoose").SchemaDefinitionProperty<ProjectImage[], Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    tags?: import("mongoose").SchemaDefinitionProperty<string[], Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    technologies?: import("mongoose").SchemaDefinitionProperty<string[], Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    links?: import("mongoose").SchemaDefinitionProperty<ProjectLink[], Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    status?: import("mongoose").SchemaDefinitionProperty<ProjectStatus, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    startDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    endDate?: import("mongoose").SchemaDefinitionProperty<Date | undefined, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isFeatured?: import("mongoose").SchemaDefinitionProperty<boolean, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Project, Document<unknown, {}, Project, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Project & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Project>;
