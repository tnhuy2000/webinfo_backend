
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum TypeDocument {
    link = "link",
    file = "file"
}

export enum ArticleStatus {
    draft = "draft",
    published = "published",
    archived = "archived"
}

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

export enum ProjectStatus {
    draft = "draft",
    published = "published",
    archived = "archived"
}

export enum SettingCategory {
    GENERAL = "GENERAL",
    SEO = "SEO",
    SOCIAL = "SOCIAL",
    THEME = "THEME",
    CONTACT = "CONTACT",
    CONTENT = "CONTENT",
    ADVANCED = "ADVANCED"
}

export enum SkillVariant {
    frontend = "frontend",
    styles = "styles",
    backend = "backend",
    devops = "devops"
}

export enum SocialPlatform {
    github = "github",
    linkedin = "linkedin",
    telegram = "telegram",
    facebook = "facebook",
    instagram = "instagram",
    twitter = "twitter",
    youtube = "youtube",
    email = "email",
    other = "other"
}

export class SocialLinksInput {
    linkedin?: Nullable<string>;
    twitter?: Nullable<string>;
    github?: Nullable<string>;
    facebook?: Nullable<string>;
}

export class LinkDocumentInput {
    url?: Nullable<string>;
    fileName?: Nullable<string>;
    type?: Nullable<TypeDocument>;
}

export class CreateArticleInput {
    title: string;
    slug: string;
    description?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    thumbnail?: Nullable<LinkDocumentInput>;
    coverImage?: Nullable<LinkDocumentInput>;
    tags?: Nullable<string[]>;
    categories?: Nullable<string[]>;
    status?: Nullable<ArticleStatus>;
    publishedAt?: Nullable<DateTime>;
    author?: Nullable<string>;
    readingTime?: Nullable<number>;
    isFeatured?: Nullable<boolean>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateArticleInput {
    title?: Nullable<string>;
    slug?: Nullable<string>;
    description?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    thumbnail?: Nullable<LinkDocumentInput>;
    coverImage?: Nullable<LinkDocumentInput>;
    tags?: Nullable<string[]>;
    categories?: Nullable<string[]>;
    status?: Nullable<ArticleStatus>;
    publishedAt?: Nullable<DateTime>;
    author?: Nullable<string>;
    readingTime?: Nullable<number>;
    isFeatured?: Nullable<boolean>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
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

export class CreateNavigationInput {
    label: string;
    href: string;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateNavigationInput {
    label?: Nullable<string>;
    href?: Nullable<string>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class ProjectLinkInput {
    type: string;
    url: string;
    label?: Nullable<string>;
}

export class ProjectImageInput {
    url?: Nullable<LinkDocumentInput>;
    alt?: Nullable<string>;
    isFeatured?: Nullable<boolean>;
    order?: Nullable<number>;
}

export class CreateProjectInput {
    title: string;
    slug: string;
    description?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    thumbnail?: Nullable<LinkDocumentInput>;
    images?: Nullable<ProjectImageInput[]>;
    tags?: Nullable<string[]>;
    technologies?: Nullable<string[]>;
    links?: Nullable<ProjectLinkInput[]>;
    status?: Nullable<ProjectStatus>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    isFeatured?: Nullable<boolean>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateProjectInput {
    title?: Nullable<string>;
    slug?: Nullable<string>;
    description?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    thumbnail?: Nullable<LinkDocumentInput>;
    images?: Nullable<ProjectImageInput[]>;
    tags?: Nullable<string[]>;
    technologies?: Nullable<string[]>;
    links?: Nullable<ProjectLinkInput[]>;
    status?: Nullable<ProjectStatus>;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    isFeatured?: Nullable<boolean>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
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

export class SkillItemInput {
    name: string;
    order?: Nullable<number>;
}

export class CreateSkillInput {
    title: string;
    description?: Nullable<string>;
    variant: SkillVariant;
    items?: Nullable<SkillItemInput[]>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateSkillInput {
    title?: Nullable<string>;
    description?: Nullable<string>;
    variant?: Nullable<SkillVariant>;
    items?: Nullable<SkillItemInput[]>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class CreateSocialLinkInput {
    platform: SocialPlatform;
    label: string;
    href: string;
    icon?: Nullable<string>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateSocialLinkInput {
    platform?: Nullable<SocialPlatform>;
    label?: Nullable<string>;
    href?: Nullable<string>;
    icon?: Nullable<string>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class CreateTagInput {
    name: string;
    slug: string;
    description?: Nullable<string>;
    color?: Nullable<string>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateTagInput {
    name?: Nullable<string>;
    slug?: Nullable<string>;
    description?: Nullable<string>;
    color?: Nullable<string>;
    order?: Nullable<number>;
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

export class CreateWorkExperienceInput {
    period: string;
    duration: string;
    company: string;
    position: string;
    technologies: string;
    isHighlighted?: Nullable<boolean>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class UpdateWorkExperienceInput {
    period?: Nullable<string>;
    duration?: Nullable<string>;
    company?: Nullable<string>;
    position?: Nullable<string>;
    technologies?: Nullable<string>;
    isHighlighted?: Nullable<boolean>;
    order?: Nullable<number>;
    isActive?: Nullable<boolean>;
}

export class SocialLinks {
    __typename?: 'SocialLinks';
    linkedin?: Nullable<string>;
    twitter?: Nullable<string>;
    github?: Nullable<string>;
    facebook?: Nullable<string>;
}

export class LinkDocument {
    __typename?: 'LinkDocument';
    url?: Nullable<string>;
    fileName?: Nullable<string>;
    type?: Nullable<TypeDocument>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract _empty(): Nullable<string> | Promise<Nullable<string>>;

    abstract articles(isActive?: Nullable<boolean>, isFeatured?: Nullable<boolean>, status?: Nullable<ArticleStatus>): Article[] | Promise<Article[]>;

    abstract article(id: string): Article | Promise<Article>;

    abstract articleBySlug(slug: string): Article | Promise<Article>;

    abstract companies(): Company[] | Promise<Company[]>;

    abstract company(id: string): Company | Promise<Company>;

    abstract contactMessages(): ContactMessage[] | Promise<ContactMessage[]>;

    abstract contactMessage(id: string): ContactMessage | Promise<ContactMessage>;

    abstract contactInfo(): ContactInfo | Promise<ContactInfo>;

    abstract contents(query?: Nullable<QueryContentInput>): PaginatedContent | Promise<PaginatedContent>;

    abstract content(id: string): Content | Promise<Content>;

    abstract contentBySlug(slug: string): Content | Promise<Content>;

    abstract navigations(isActive?: Nullable<boolean>): Navigation[] | Promise<Navigation[]>;

    abstract navigation(id: string): Navigation | Promise<Navigation>;

    abstract projects(isActive?: Nullable<boolean>, isFeatured?: Nullable<boolean>, status?: Nullable<ProjectStatus>): Project[] | Promise<Project[]>;

    abstract project(id: string): Project | Promise<Project>;

    abstract projectBySlug(slug: string): Project | Promise<Project>;

    abstract services(isActive?: Nullable<boolean>): Service[] | Promise<Service[]>;

    abstract service(id: string): Service | Promise<Service>;

    abstract settings(category?: Nullable<SettingCategory>): Setting[] | Promise<Setting[]>;

    abstract setting(key: string): Setting | Promise<Setting>;

    abstract getPublicSettings(): Setting[] | Promise<Setting[]>;

    abstract allSettingsAsObject(): JSON | Promise<JSON>;

    abstract skills(isActive?: Nullable<boolean>): Skill[] | Promise<Skill[]>;

    abstract skill(id: string): Skill | Promise<Skill>;

    abstract socialLinks(isActive?: Nullable<boolean>): SocialLink[] | Promise<SocialLink[]>;

    abstract socialLink(id: string): SocialLink | Promise<SocialLink>;

    abstract tags(isActive?: Nullable<boolean>): Tag[] | Promise<Tag[]>;

    abstract tag(id: string): Tag | Promise<Tag>;

    abstract tagBySlug(slug: string): Tag | Promise<Tag>;

    abstract teamMembers(isActive?: Nullable<boolean>): TeamMember[] | Promise<TeamMember[]>;

    abstract teamMember(id: string): TeamMember | Promise<TeamMember>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;

    abstract workExperiences(isActive?: Nullable<boolean>): WorkExperience[] | Promise<WorkExperience[]>;

    abstract workExperience(id: string): WorkExperience | Promise<WorkExperience>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract _empty(): Nullable<string> | Promise<Nullable<string>>;

    abstract createArticle(input: CreateArticleInput): Article | Promise<Article>;

    abstract updateArticle(id: string, input: UpdateArticleInput): Article | Promise<Article>;

    abstract deleteArticle(id: string): boolean | Promise<boolean>;

    abstract incrementArticleViews(id: string): Article | Promise<Article>;

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

    abstract createNavigation(input: CreateNavigationInput): Navigation | Promise<Navigation>;

    abstract updateNavigation(id: string, input: UpdateNavigationInput): Navigation | Promise<Navigation>;

    abstract deleteNavigation(id: string): boolean | Promise<boolean>;

    abstract createProject(input: CreateProjectInput): Project | Promise<Project>;

    abstract updateProject(id: string, input: UpdateProjectInput): Project | Promise<Project>;

    abstract deleteProject(id: string): boolean | Promise<boolean>;

    abstract createService(input: CreateServiceInput): Service | Promise<Service>;

    abstract updateService(id: string, input: UpdateServiceInput): Service | Promise<Service>;

    abstract removeService(id: string): boolean | Promise<boolean>;

    abstract createSetting(input: CreateSettingInput): Setting | Promise<Setting>;

    abstract updateSetting(key: string, input?: Nullable<UpdateSettingInput>): Setting | Promise<Setting>;

    abstract bulkUpdateSettings(settings: BulkSettingInput[]): number | Promise<number>;

    abstract deleteSetting(key: string): boolean | Promise<boolean>;

    abstract initializeDefaultSettings(): boolean | Promise<boolean>;

    abstract createSkill(input: CreateSkillInput): Skill | Promise<Skill>;

    abstract updateSkill(id: string, input: UpdateSkillInput): Skill | Promise<Skill>;

    abstract deleteSkill(id: string): boolean | Promise<boolean>;

    abstract createSocialLink(input: CreateSocialLinkInput): SocialLink | Promise<SocialLink>;

    abstract updateSocialLink(id: string, input: UpdateSocialLinkInput): SocialLink | Promise<SocialLink>;

    abstract deleteSocialLink(id: string): boolean | Promise<boolean>;

    abstract createTag(input: CreateTagInput): Tag | Promise<Tag>;

    abstract updateTag(id: string, input: UpdateTagInput): Tag | Promise<Tag>;

    abstract deleteTag(id: string): boolean | Promise<boolean>;

    abstract createTeamMember(input: CreateTeamMemberInput): TeamMember | Promise<TeamMember>;

    abstract updateTeamMember(id: string, input: UpdateTeamMemberInput): TeamMember | Promise<TeamMember>;

    abstract removeTeamMember(id: string): boolean | Promise<boolean>;

    abstract createUser(input: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: string, input: UpdateUserInput): User | Promise<User>;

    abstract deleteUser(id: string): boolean | Promise<boolean>;

    abstract createWorkExperience(input: CreateWorkExperienceInput): WorkExperience | Promise<WorkExperience>;

    abstract updateWorkExperience(id: string, input: UpdateWorkExperienceInput): WorkExperience | Promise<WorkExperience>;

    abstract deleteWorkExperience(id: string): boolean | Promise<boolean>;
}

export class Article {
    __typename?: 'Article';
    _id: string;
    title: string;
    slug: string;
    description?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    thumbnail?: Nullable<LinkDocument>;
    coverImage?: Nullable<LinkDocument>;
    tags: string[];
    categories: string[];
    status: ArticleStatus;
    publishedAt?: Nullable<DateTime>;
    author?: Nullable<string>;
    readingTime: number;
    views: number;
    isFeatured: boolean;
    order: number;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
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

export class Navigation {
    __typename?: 'Navigation';
    _id: string;
    label: string;
    href: string;
    order: number;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class ProjectLink {
    __typename?: 'ProjectLink';
    type: string;
    url: string;
    label?: Nullable<string>;
}

export class ProjectImage {
    __typename?: 'ProjectImage';
    url?: Nullable<LinkDocument>;
    alt?: Nullable<string>;
    isFeatured: boolean;
    order: number;
}

export class Project {
    __typename?: 'Project';
    _id: string;
    title: string;
    slug: string;
    description?: Nullable<string>;
    content?: Nullable<string>;
    excerpt?: Nullable<string>;
    thumbnail?: Nullable<LinkDocument>;
    images: ProjectImage[];
    tags: string[];
    technologies: string[];
    links: ProjectLink[];
    status: ProjectStatus;
    startDate?: Nullable<DateTime>;
    endDate?: Nullable<DateTime>;
    isFeatured: boolean;
    order: number;
    isActive: boolean;
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

export class Setting {
    __typename?: 'Setting';
    _id: string;
    key: string;
    value: JSON;
    category: SettingCategory;
    description?: Nullable<string>;
    type: string;
    isPublic: boolean;
    isDefault?: Nullable<boolean>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class SkillItem {
    __typename?: 'SkillItem';
    name: string;
    order: number;
}

export class Skill {
    __typename?: 'Skill';
    _id: string;
    title: string;
    description?: Nullable<string>;
    variant: SkillVariant;
    items: SkillItem[];
    order: number;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class SocialLink {
    __typename?: 'SocialLink';
    _id: string;
    platform: SocialPlatform;
    label: string;
    href: string;
    icon?: Nullable<string>;
    order: number;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Tag {
    __typename?: 'Tag';
    _id: string;
    name: string;
    slug: string;
    description?: Nullable<string>;
    color?: Nullable<string>;
    order: number;
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

export class WorkExperience {
    __typename?: 'WorkExperience';
    _id: string;
    period: string;
    duration: string;
    company: string;
    position: string;
    technologies: string;
    isHighlighted: boolean;
    order: number;
    isActive: boolean;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export type JSON = any;
export type DateTime = any;
type Nullable<T> = T | null;
