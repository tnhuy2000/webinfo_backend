/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SocialLinksInput {
    linkedin?: Nullable<string>;
    twitter?: Nullable<string>;
    github?: Nullable<string>;
    facebook?: Nullable<string>;
}

export class AddressInput {
    street: string;
    city: string;
    country: string;
    zipCode?: Nullable<string>;
}

export class CreateCompanyInput {
    name: string;
    description: string;
    mission?: Nullable<string>;
    vision?: Nullable<string>;
    founded?: Nullable<string>;
    employees?: Nullable<number>;
    address?: Nullable<AddressInput>;
}

export class UpdateCompanyInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    mission?: Nullable<string>;
    vision?: Nullable<string>;
    founded?: Nullable<string>;
    employees?: Nullable<number>;
    address?: Nullable<AddressInput>;
}

export class CreateContactMessageInput {
    name: string;
    email: string;
    phone?: Nullable<string>;
    subject: string;
    message: string;
}

export class UpdateContactInfoInput {
    email?: Nullable<string>;
    phone?: Nullable<string>;
    address?: Nullable<string>;
    workingHours?: Nullable<string>;
    socialLinks?: Nullable<SocialLinksInput>;
}

export class CreateServiceInput {
    title: string;
    description: string;
    icon?: Nullable<string>;
    features?: Nullable<string[]>;
    price?: Nullable<string>;
    isActive?: Nullable<boolean>;
}

export class UpdateServiceInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
    icon?: Nullable<string>;
    features?: Nullable<string[]>;
    price?: Nullable<string>;
    isActive?: Nullable<boolean>;
}

export class CreateTeamMemberInput {
    name: string;
    position: string;
    bio?: Nullable<string>;
    avatar: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    socialLinks?: Nullable<SocialLinksInput>;
    skills?: Nullable<string[]>;
    isActive?: Nullable<boolean>;
}

export class UpdateTeamMemberInput {
    name?: Nullable<string>;
    position?: Nullable<string>;
    bio?: Nullable<string>;
    avatar?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    socialLinks?: Nullable<SocialLinksInput>;
    skills?: Nullable<string[]>;
    isActive?: Nullable<boolean>;
}

export class SocialLinks {
    __typename?: 'SocialLinks';
    linkedin?: Nullable<string>;
    twitter?: Nullable<string>;
    github?: Nullable<string>;
    facebook?: Nullable<string>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract _empty(): Nullable<string> | Promise<Nullable<string>>;

    abstract companies(): Company[] | Promise<Company[]>;

    abstract company(id: string): Company | Promise<Company>;

    abstract contactMessages(): ContactMessage[] | Promise<ContactMessage[]>;

    abstract contactMessage(id: string): ContactMessage | Promise<ContactMessage>;

    abstract contactInfo(): ContactInfo | Promise<ContactInfo>;

    abstract services(isActive?: Nullable<boolean>): Service[] | Promise<Service[]>;

    abstract service(id: string): Service | Promise<Service>;

    abstract teamMembers(isActive?: Nullable<boolean>): TeamMember[] | Promise<TeamMember[]>;

    abstract teamMember(id: string): TeamMember | Promise<TeamMember>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract _empty(): Nullable<string> | Promise<Nullable<string>>;

    abstract createCompany(input: CreateCompanyInput): Company | Promise<Company>;

    abstract updateCompany(id: string, input: UpdateCompanyInput): Company | Promise<Company>;

    abstract removeCompany(id: string): boolean | Promise<boolean>;

    abstract createContactMessage(input: CreateContactMessageInput): ContactMessage | Promise<ContactMessage>;

    abstract markAsRead(id: string): ContactMessage | Promise<ContactMessage>;

    abstract updateContactInfo(input: UpdateContactInfoInput): ContactInfo | Promise<ContactInfo>;

    abstract createService(input: CreateServiceInput): Service | Promise<Service>;

    abstract updateService(id: string, input: UpdateServiceInput): Service | Promise<Service>;

    abstract removeService(id: string): boolean | Promise<boolean>;

    abstract createTeamMember(input: CreateTeamMemberInput): TeamMember | Promise<TeamMember>;

    abstract updateTeamMember(id: string, input: UpdateTeamMemberInput): TeamMember | Promise<TeamMember>;

    abstract removeTeamMember(id: string): boolean | Promise<boolean>;
}

export class Address {
    __typename?: 'Address';
    street: string;
    city: string;
    country: string;
    zipCode?: Nullable<string>;
}

export class Company {
    __typename?: 'Company';
    _id: string;
    name: string;
    description: string;
    mission?: Nullable<string>;
    vision?: Nullable<string>;
    founded?: Nullable<string>;
    employees?: Nullable<number>;
    address?: Nullable<Address>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<number>;
    deletedBy?: Nullable<string>;
}

export class ContactMessage {
    __typename?: 'ContactMessage';
    _id: string;
    name: string;
    email: string;
    phone?: Nullable<string>;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: DateTime;
}

export class ContactInfo {
    __typename?: 'ContactInfo';
    _id: string;
    email: string;
    phone: string;
    address: string;
    workingHours?: Nullable<string>;
    socialLinks?: Nullable<SocialLinks>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Service {
    __typename?: 'Service';
    _id: string;
    title: string;
    description: string;
    icon?: Nullable<string>;
    features: string[];
    price?: Nullable<string>;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class TeamMember {
    __typename?: 'TeamMember';
    _id: string;
    name: string;
    position: string;
    bio?: Nullable<string>;
    avatar: string;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    socialLinks?: Nullable<SocialLinks>;
    skills: string[];
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
