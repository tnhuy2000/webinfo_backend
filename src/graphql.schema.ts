
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum ContentType {
    PAGE = "PAGE",
    POST = "POST",
    BLOG = "BLOG",
    BANNER = "BANNER",
    MENU = "MENU"
}

export enum ContentStatus {
    DRAFT = "DRAFT",
    PUBLISHED = "PUBLISHED",
    ARCHIVED = "ARCHIVED"
}

export enum SettingCategory {
    GENERAL = "GENERAL",
    SEO = "SEO",
    SOCIAL = "SOCIAL",
    THEME = "THEME",
    EMAIL = "EMAIL",
    ADVANCED = "ADVANCED"
}

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

export class CreateContentInput {
    title: string;
    slug: string;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    type?: Nullable<ContentType>;
    status?: Nullable<ContentStatus>;
    featuredImage?: Nullable<string>;
    tags?: Nullable<string[]>;
    categories?: Nullable<string[]>;
    metadata?: Nullable<JSON>;
    author?: Nullable<string>;
    publishedAt?: Nullable<DateTime>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateContentInput {
    title?: Nullable<string>;
    slug?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    type?: Nullable<ContentType>;
    status?: Nullable<ContentStatus>;
    featuredImage?: Nullable<string>;
    tags?: Nullable<string[]>;
    categories?: Nullable<string[]>;
    metadata?: Nullable<JSON>;
    author?: Nullable<string>;
    publishedAt?: Nullable<DateTime>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class QueryContentInput {
    type?: Nullable<ContentType>;
    status?: Nullable<ContentStatus>;
    search?: Nullable<string>;
    page?: Nullable<number>;
    limit?: Nullable<number>;
    sortBy?: Nullable<string>;
    sortOrder?: Nullable<string>;
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

export class CreateSettingInput {
    key: string;
    value: JSON;
    category?: Nullable<SettingCategory>;
    description?: Nullable<string>;
    type?: Nullable<string>;
    isPublic?: Nullable<boolean>;
}

export class UpdateSettingInput {
    value?: Nullable<JSON>;
    category?: Nullable<SettingCategory>;
    description?: Nullable<string>;
    type?: Nullable<string>;
    isPublic?: Nullable<boolean>;
}

export class BulkSettingInput {
    key: string;
    value: JSON;
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

export class CreateUserInput {
    email: string;
    password: string;
    name: string;
    role?: Nullable<string>;
}

export class UpdateUserInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<string>;
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

    abstract contents(query?: Nullable<QueryContentInput>): PaginatedContent | Promise<PaginatedContent>;

    abstract content(id: string): Content | Promise<Content>;

    abstract contentBySlug(slug: string): Content | Promise<Content>;

    abstract services(isActive?: Nullable<boolean>): Service[] | Promise<Service[]>;

    abstract service(id: string): Service | Promise<Service>;

    abstract settings(category?: Nullable<SettingCategory>): Setting[] | Promise<Setting[]>;

    abstract setting(key: string): Setting | Promise<Setting>;

    abstract publicSettings(): JSON | Promise<JSON>;

    abstract allSettingsAsObject(): JSON | Promise<JSON>;

    abstract teamMembers(isActive?: Nullable<boolean>): TeamMember[] | Promise<TeamMember[]>;

    abstract teamMember(id: string): TeamMember | Promise<TeamMember>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;
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

    abstract createContent(input: CreateContentInput): Content | Promise<Content>;

    abstract updateContent(id: string, input: UpdateContentInput): Content | Promise<Content>;

    abstract deleteContent(id: string): boolean | Promise<boolean>;

    abstract bulkDeleteContents(ids: string[]): number | Promise<number>;

    abstract createService(input: CreateServiceInput): Service | Promise<Service>;

    abstract updateService(id: string, input: UpdateServiceInput): Service | Promise<Service>;

    abstract removeService(id: string): boolean | Promise<boolean>;

    abstract createSetting(input: CreateSettingInput): Setting | Promise<Setting>;

    abstract updateSetting(key: string, input: UpdateSettingInput): Setting | Promise<Setting>;

    abstract bulkUpdateSettings(settings: BulkSettingInput[]): number | Promise<number>;

    abstract deleteSetting(key: string): boolean | Promise<boolean>;

    abstract initializeDefaultSettings(): boolean | Promise<boolean>;

    abstract createTeamMember(input: CreateTeamMemberInput): TeamMember | Promise<TeamMember>;

    abstract updateTeamMember(id: string, input: UpdateTeamMemberInput): TeamMember | Promise<TeamMember>;

    abstract removeTeamMember(id: string): boolean | Promise<boolean>;

    abstract createUser(input: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: string, input: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: string): boolean | Promise<boolean>;
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

export class Content {
    __typename?: 'Content';
    _id: string;
    title: string;
    slug: string;
    content: string;
    excerpt?: Nullable<string>;
    type: ContentType;
    status: ContentStatus;
    featuredImage?: Nullable<string>;
    tags?: Nullable<string[]>;
    categories?: Nullable<string[]>;
    metadata?: Nullable<JSON>;
    author?: Nullable<string>;
    publishedAt?: Nullable<DateTime>;
    order: number;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class PaginatedContent {
    __typename?: 'PaginatedContent';
    data?: Nullable<Nullable<Content>[]>;
    total: number;
    page: number;
    limit: number;
    totalPages: number;
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

export class Setting {
    __typename?: 'Setting';
    _id: string;
    key: string;
    value: JSON;
    category: SettingCategory;
    description?: Nullable<string>;
    type: string;
    isPublic: boolean;
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

export class User {
    __typename?: 'User';
    _id: string;
    email: string;
    name: string;
    role: string;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type JSON = any;
export type DateTime = any;
type Nullable<T> = T | null;
