import { Document } from 'mongoose';
export type ContactMessageDocument = ContactMessage & Document;
export declare class ContactMessage {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
}
export declare const ContactMessageSchema: import("mongoose").Schema<ContactMessage, import("mongoose").Model<ContactMessage, any, any, any, Document<unknown, any, ContactMessage, any, import("mongoose").DefaultSchemaOptions> & ContactMessage & Required<{
    _id: string;
}> & {
    __v: number;
}, any, ContactMessage>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactMessage, Document<unknown, {}, ContactMessage, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
    _id: string;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<string, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string | undefined, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    subject?: import("mongoose").SchemaDefinitionProperty<string, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    message?: import("mongoose").SchemaDefinitionProperty<string, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isRead?: import("mongoose").SchemaDefinitionProperty<boolean, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, ContactMessage, Document<unknown, {}, ContactMessage, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<ContactMessage & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, ContactMessage>;
