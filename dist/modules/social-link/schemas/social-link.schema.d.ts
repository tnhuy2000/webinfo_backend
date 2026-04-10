import { Document } from 'mongoose';
import { SocialPlatform } from 'src/graphql.schema';
export type SocialLinkDocument = SocialLink & Document;
export declare class SocialLink {
    platform: SocialPlatform;
    label: string;
    href: string;
    icon?: string;
    order: number;
    isActive: boolean;
}
export declare const SocialLinkSchema: import("mongoose").Schema<SocialLink, import("mongoose").Model<SocialLink, any, any, any, Document<unknown, any, SocialLink, any, import("mongoose").DefaultSchemaOptions> & SocialLink & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, SocialLink>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SocialLink, Document<unknown, {}, SocialLink, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    platform?: import("mongoose").SchemaDefinitionProperty<SocialPlatform, SocialLink, Document<unknown, {}, SocialLink, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    label?: import("mongoose").SchemaDefinitionProperty<string, SocialLink, Document<unknown, {}, SocialLink, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    href?: import("mongoose").SchemaDefinitionProperty<string, SocialLink, Document<unknown, {}, SocialLink, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icon?: import("mongoose").SchemaDefinitionProperty<string | undefined, SocialLink, Document<unknown, {}, SocialLink, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    order?: import("mongoose").SchemaDefinitionProperty<number, SocialLink, Document<unknown, {}, SocialLink, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, SocialLink, Document<unknown, {}, SocialLink, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<SocialLink & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, SocialLink>;
