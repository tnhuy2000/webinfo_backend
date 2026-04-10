import { Document } from 'mongoose';
import { SkillVariant } from 'src/graphql.schema';
export type SkillDocument = Skill & Document;
export declare class SkillItem {
    name: string;
    order: number;
}
export declare const SkillItemSchema: import("mongoose").Schema<SkillItem, import("mongoose").Model<SkillItem, any, any, any, Document<unknown, any, SkillItem, any, import("mongoose").DefaultSchemaOptions> & SkillItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, SkillItem>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SkillItem, Document<unknown, {}, SkillItem, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SkillItem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    name?: import("mongoose").SchemaDefinitionProperty<string, SkillItem, Document<unknown, {}, SkillItem, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SkillItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, SkillItem, Document<unknown, {}, SkillItem, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SkillItem & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SkillItem>;
export declare class Skill {
    title: string;
    description?: string;
    variant: SkillVariant;
    items: SkillItem[];
    order: number;
    isActive: boolean;
}
export declare const SkillSchema: import("mongoose").Schema<Skill, import("mongoose").Model<Skill, any, any, any, Document<unknown, any, Skill, any, import("mongoose").DefaultSchemaOptions> & Skill & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Skill>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Skill, Document<unknown, {}, Skill, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, Skill, Document<unknown, {}, Skill, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string | undefined, Skill, Document<unknown, {}, Skill, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    variant?: import("mongoose").SchemaDefinitionProperty<SkillVariant, Skill, Document<unknown, {}, Skill, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    items?: import("mongoose").SchemaDefinitionProperty<SkillItem[], Skill, Document<unknown, {}, Skill, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Skill, Document<unknown, {}, Skill, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Skill, Document<unknown, {}, Skill, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Skill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Skill>;
