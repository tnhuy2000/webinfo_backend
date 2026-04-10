import { Document } from 'mongoose';
import { SocialLinks } from '../../../common/types/social-links.type';
export type ContactInfoDocument = ContactInfo & Document;
export declare class ContactInfo {
    _id: string;
    email: string;
    phone: string;
    address: string;
    workingHours?: string;
    socialLinks?: SocialLinks;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ContactInfoSchema: import("mongoose").Schema<ContactInfo, import("mongoose").Model<ContactInfo, any, any, any, Document<unknown, any, ContactInfo, any, import("mongoose").DefaultSchemaOptions> & ContactInfo & Required<{
    _id: string;
}> & {
    __v: number;
}, any, ContactInfo>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactInfo, Document<unknown, {}, ContactInfo, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
    _id: string;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<string, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<string, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    workingHours?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    socialLinks?: import("mongoose").SchemaDefinitionProperty<SocialLinks | undefined, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, ContactInfo, Document<unknown, {}, ContactInfo, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactInfo & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ContactInfo>;
