import { Document } from 'mongoose';
import { SettingCategory } from 'src/graphql.schema';
export type SettingDocument = Setting & Document;
export declare class Setting {
    key: string;
    value: any;
    category: SettingCategory;
    description: string;
    type: string;
    isPublic: boolean;
    isDefault: boolean;
}
export declare const SettingSchema: import("mongoose").Schema<Setting, import("mongoose").Model<Setting, any, any, any, Document<unknown, any, Setting, any, import("mongoose").DefaultSchemaOptions> & Setting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Setting>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Setting, Document<unknown, {}, Setting, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    key?: import("mongoose").SchemaDefinitionProperty<string, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    value?: import("mongoose").SchemaDefinitionProperty<any, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    category?: import("mongoose").SchemaDefinitionProperty<SettingCategory, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    type?: import("mongoose").SchemaDefinitionProperty<string, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isPublic?: import("mongoose").SchemaDefinitionProperty<boolean, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isDefault?: import("mongoose").SchemaDefinitionProperty<boolean, Setting, Document<unknown, {}, Setting, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Setting & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Setting>;
