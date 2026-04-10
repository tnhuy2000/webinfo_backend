import { Document } from 'mongoose';
export type NavigationDocument = Navigation & Document;
export declare class Navigation {
    label: string;
    href: string;
    order: number;
    isActive: boolean;
}
export declare const NavigationSchema: import("mongoose").Schema<Navigation, import("mongoose").Model<Navigation, any, any, any, Document<unknown, any, Navigation, any, import("mongoose").DefaultSchemaOptions> & Navigation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, Navigation>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Navigation, Document<unknown, {}, Navigation, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Navigation & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    label?: import("mongoose").SchemaDefinitionProperty<string, Navigation, Document<unknown, {}, Navigation, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Navigation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    href?: import("mongoose").SchemaDefinitionProperty<string, Navigation, Document<unknown, {}, Navigation, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Navigation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, Navigation, Document<unknown, {}, Navigation, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Navigation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Navigation, Document<unknown, {}, Navigation, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Navigation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Navigation>;
