import { Document } from 'mongoose';
declare class Address {
    street: string;
    city: string;
    country: string;
    zipCode?: string;
}
export type CompanyDocument = Company & Document;
export declare class Company {
    _id: string;
    name: string;
    description: string;
    mission?: string;
    vision?: string;
    founded?: string;
    employees?: number;
    address?: Address;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CompanySchema: import("mongoose").Schema<Company, import("mongoose").Model<Company, any, any, any, Document<unknown, any, Company, any, import("mongoose").DefaultSchemaOptions> & Company & Required<{
    _id: string;
}> & {
    __v: number;
}, any, Company>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Company, Document<unknown, {}, Company, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
    _id: string;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<string, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    description?: import("mongoose").SchemaDefinitionProperty<string, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    mission?: import("mongoose").SchemaDefinitionProperty<string | undefined, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    vision?: import("mongoose").SchemaDefinitionProperty<string | undefined, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    founded?: import("mongoose").SchemaDefinitionProperty<string | undefined, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    employees?: import("mongoose").SchemaDefinitionProperty<number | undefined, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    address?: import("mongoose").SchemaDefinitionProperty<Address | undefined, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, Company, Document<unknown, {}, Company, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<Company & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Company>;
export {};
