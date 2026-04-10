import { Document } from 'mongoose';
export type WorkExperienceDocument = WorkExperience & Document;
export declare class WorkExperience {
    period: string;
    duration: string;
    company: string;
    position: string;
    technologies: string;
    isHighlighted: boolean;
    order: number;
    isActive: boolean;
}
export declare const WorkExperienceSchema: import("mongoose").Schema<WorkExperience, import("mongoose").Model<WorkExperience, any, any, any, Document<unknown, any, WorkExperience, any, import("mongoose").DefaultSchemaOptions> & WorkExperience & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, WorkExperience>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WorkExperience, Document<unknown, {}, WorkExperience, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    period?: import("mongoose").SchemaDefinitionProperty<string, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    duration?: import("mongoose").SchemaDefinitionProperty<string, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    company?: import("mongoose").SchemaDefinitionProperty<string, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<string, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    technologies?: import("mongoose").SchemaDefinitionProperty<string, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isHighlighted?: import("mongoose").SchemaDefinitionProperty<boolean, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, WorkExperience, Document<unknown, {}, WorkExperience, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<WorkExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, WorkExperience>;
