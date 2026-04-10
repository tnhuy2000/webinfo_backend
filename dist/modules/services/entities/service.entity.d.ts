import { Document } from 'mongoose';
export type ServiceDocument = Service & Document;
export declare class Service {
    _id: string;
    title: string;
    description: string;
    icon?: string;
    features: string[];
    price?: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ServiceSchema: import("mongoose").Schema<Service, import("mongoose").Model<Service, any, any, any, Document<unknown, any, Service, any, import("mongoose").DefaultSchemaOptions> & Service & Required<{
    _id: string;
}> & {
    __v: number;
}, any, Service>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Service, Document<unknown, {}, Service, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
    _id: string;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<string, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    title?: import("mongoose").SchemaDefinitionProperty<string, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    icon?: import("mongoose").SchemaDefinitionProperty<string | undefined, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    features?: import("mongoose").SchemaDefinitionProperty<string[], Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    price?: import("mongoose").SchemaDefinitionProperty<string | undefined, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Service, Document<unknown, {}, Service, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Service & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Service>;
