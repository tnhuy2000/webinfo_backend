import { Document } from 'mongoose';
import { SocialLinks } from '../../../common/types/social-links.type';
export type TeamMemberDocument = TeamMember & Document;
export declare class TeamMember {
    _id: string;
    name: string;
    position: string;
    bio?: string;
    avatar: string;
    email?: string;
    phone?: string;
    socialLinks?: SocialLinks;
    skills: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const TeamMemberSchema: import("mongoose").Schema<TeamMember, import("mongoose").Model<TeamMember, any, any, any, Document<unknown, any, TeamMember, any, import("mongoose").DefaultSchemaOptions> & TeamMember & Required<{
    _id: string;
}> & {
    __v: number;
}, any, TeamMember>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TeamMember, Document<unknown, {}, TeamMember, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
    _id: string;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<string, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    position?: import("mongoose").SchemaDefinitionProperty<string, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    bio?: import("mongoose").SchemaDefinitionProperty<string | undefined, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    avatar?: import("mongoose").SchemaDefinitionProperty<string, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    email?: import("mongoose").SchemaDefinitionProperty<string | undefined, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    phone?: import("mongoose").SchemaDefinitionProperty<string | undefined, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    socialLinks?: import("mongoose").SchemaDefinitionProperty<SocialLinks | undefined, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    skills?: import("mongoose").SchemaDefinitionProperty<string[], TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isActive?: import("mongoose").SchemaDefinitionProperty<boolean, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    createdAt?: import("mongoose").SchemaDefinitionProperty<Date, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    updatedAt?: import("mongoose").SchemaDefinitionProperty<Date, TeamMember, Document<unknown, {}, TeamMember, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<TeamMember & Required<{
        _id: string;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, TeamMember>;
