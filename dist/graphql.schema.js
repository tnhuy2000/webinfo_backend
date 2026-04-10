"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.Article = exports.IMutation = exports.IQuery = exports.LinkDocument = exports.SocialLinks = exports.UpdateWorkExperienceInput = exports.CreateWorkExperienceInput = exports.UpdateUserInput = exports.CreateUserInput = exports.UpdateTeamMemberInput = exports.CreateTeamMemberInput = exports.UpdateTagInput = exports.CreateTagInput = exports.UpdateSocialLinkInput = exports.CreateSocialLinkInput = exports.UpdateSkillInput = exports.CreateSkillInput = exports.SkillItemInput = exports.BulkSettingInput = exports.UpdateSettingInput = exports.CreateSettingInput = exports.UpdateServiceInput = exports.CreateServiceInput = exports.UpdateProjectInput = exports.CreateProjectInput = exports.ProjectImageInput = exports.ProjectLinkInput = exports.UpdateNavigationInput = exports.CreateNavigationInput = exports.QueryContentInput = exports.UpdateContentInput = exports.CreateContentInput = exports.UpdateContactInfoInput = exports.CreateContactMessageInput = exports.UpdateCompanyInput = exports.CreateCompanyInput = exports.AddressInput = exports.UpdateArticleInput = exports.CreateArticleInput = exports.LinkDocumentInput = exports.SocialLinksInput = exports.SocialPlatform = exports.SkillVariant = exports.SettingCategory = exports.ProjectStatus = exports.ContentStatus = exports.ContentType = exports.ArticleStatus = exports.TypeDocument = void 0;
exports.WorkExperience = exports.User = exports.TeamMember = exports.Tag = exports.SocialLink = exports.Skill = exports.SkillItem = exports.Setting = exports.Service = exports.Project = exports.ProjectImage = exports.ProjectLink = exports.Navigation = exports.PaginatedContent = exports.Content = exports.ContactInfo = exports.ContactMessage = exports.Company = void 0;
var TypeDocument;
(function (TypeDocument) {
    TypeDocument["link"] = "link";
    TypeDocument["file"] = "file";
})(TypeDocument || (exports.TypeDocument = TypeDocument = {}));
var ArticleStatus;
(function (ArticleStatus) {
    ArticleStatus["draft"] = "draft";
    ArticleStatus["published"] = "published";
    ArticleStatus["archived"] = "archived";
})(ArticleStatus || (exports.ArticleStatus = ArticleStatus = {}));
var ContentType;
(function (ContentType) {
    ContentType["PAGE"] = "PAGE";
    ContentType["POST"] = "POST";
    ContentType["BLOG"] = "BLOG";
    ContentType["BANNER"] = "BANNER";
    ContentType["MENU"] = "MENU";
})(ContentType || (exports.ContentType = ContentType = {}));
var ContentStatus;
(function (ContentStatus) {
    ContentStatus["DRAFT"] = "DRAFT";
    ContentStatus["PUBLISHED"] = "PUBLISHED";
    ContentStatus["ARCHIVED"] = "ARCHIVED";
})(ContentStatus || (exports.ContentStatus = ContentStatus = {}));
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["draft"] = "draft";
    ProjectStatus["published"] = "published";
    ProjectStatus["archived"] = "archived";
})(ProjectStatus || (exports.ProjectStatus = ProjectStatus = {}));
var SettingCategory;
(function (SettingCategory) {
    SettingCategory["GENERAL"] = "GENERAL";
    SettingCategory["SEO"] = "SEO";
    SettingCategory["SOCIAL"] = "SOCIAL";
    SettingCategory["THEME"] = "THEME";
    SettingCategory["CONTACT"] = "CONTACT";
    SettingCategory["CONTENT"] = "CONTENT";
    SettingCategory["ADVANCED"] = "ADVANCED";
})(SettingCategory || (exports.SettingCategory = SettingCategory = {}));
var SkillVariant;
(function (SkillVariant) {
    SkillVariant["frontend"] = "frontend";
    SkillVariant["styles"] = "styles";
    SkillVariant["backend"] = "backend";
    SkillVariant["devops"] = "devops";
})(SkillVariant || (exports.SkillVariant = SkillVariant = {}));
var SocialPlatform;
(function (SocialPlatform) {
    SocialPlatform["github"] = "github";
    SocialPlatform["linkedin"] = "linkedin";
    SocialPlatform["telegram"] = "telegram";
    SocialPlatform["facebook"] = "facebook";
    SocialPlatform["instagram"] = "instagram";
    SocialPlatform["twitter"] = "twitter";
    SocialPlatform["youtube"] = "youtube";
    SocialPlatform["email"] = "email";
    SocialPlatform["other"] = "other";
})(SocialPlatform || (exports.SocialPlatform = SocialPlatform = {}));
class SocialLinksInput {
    linkedin;
    twitter;
    github;
    facebook;
}
exports.SocialLinksInput = SocialLinksInput;
class LinkDocumentInput {
    url;
    fileName;
    type;
}
exports.LinkDocumentInput = LinkDocumentInput;
class CreateArticleInput {
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    coverImage;
    tags;
    categories;
    status;
    publishedAt;
    author;
    readingTime;
    isFeatured;
    order;
    isActive;
}
exports.CreateArticleInput = CreateArticleInput;
class UpdateArticleInput {
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    coverImage;
    tags;
    categories;
    status;
    publishedAt;
    author;
    readingTime;
    isFeatured;
    order;
    isActive;
}
exports.UpdateArticleInput = UpdateArticleInput;
class AddressInput {
    street;
    city;
    country;
    zipCode;
}
exports.AddressInput = AddressInput;
class CreateCompanyInput {
    name;
    description;
    mission;
    vision;
    founded;
    employees;
    address;
}
exports.CreateCompanyInput = CreateCompanyInput;
class UpdateCompanyInput {
    name;
    description;
    mission;
    vision;
    founded;
    employees;
    address;
}
exports.UpdateCompanyInput = UpdateCompanyInput;
class CreateContactMessageInput {
    name;
    email;
    phone;
    subject;
    message;
}
exports.CreateContactMessageInput = CreateContactMessageInput;
class UpdateContactInfoInput {
    email;
    phone;
    address;
    workingHours;
    socialLinks;
}
exports.UpdateContactInfoInput = UpdateContactInfoInput;
class CreateContentInput {
    title;
    slug;
    content;
    excerpt;
    type;
    status;
    featuredImage;
    tags;
    categories;
    metadata;
    author;
    publishedAt;
    order;
    isActive;
}
exports.CreateContentInput = CreateContentInput;
class UpdateContentInput {
    title;
    slug;
    content;
    excerpt;
    type;
    status;
    featuredImage;
    tags;
    categories;
    metadata;
    author;
    publishedAt;
    order;
    isActive;
}
exports.UpdateContentInput = UpdateContentInput;
class QueryContentInput {
    type;
    status;
    search;
    page;
    limit;
    sortBy;
    sortOrder;
}
exports.QueryContentInput = QueryContentInput;
class CreateNavigationInput {
    label;
    href;
    order;
    isActive;
}
exports.CreateNavigationInput = CreateNavigationInput;
class UpdateNavigationInput {
    label;
    href;
    order;
    isActive;
}
exports.UpdateNavigationInput = UpdateNavigationInput;
class ProjectLinkInput {
    type;
    url;
    label;
}
exports.ProjectLinkInput = ProjectLinkInput;
class ProjectImageInput {
    url;
    alt;
    isFeatured;
    order;
}
exports.ProjectImageInput = ProjectImageInput;
class CreateProjectInput {
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    images;
    tags;
    technologies;
    links;
    status;
    startDate;
    endDate;
    isFeatured;
    order;
    isActive;
}
exports.CreateProjectInput = CreateProjectInput;
class UpdateProjectInput {
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    images;
    tags;
    technologies;
    links;
    status;
    startDate;
    endDate;
    isFeatured;
    order;
    isActive;
}
exports.UpdateProjectInput = UpdateProjectInput;
class CreateServiceInput {
    title;
    description;
    icon;
    features;
    price;
    isActive;
}
exports.CreateServiceInput = CreateServiceInput;
class UpdateServiceInput {
    title;
    description;
    icon;
    features;
    price;
    isActive;
}
exports.UpdateServiceInput = UpdateServiceInput;
class CreateSettingInput {
    key;
    value;
    category;
    description;
    type;
    isPublic;
}
exports.CreateSettingInput = CreateSettingInput;
class UpdateSettingInput {
    value;
    category;
    description;
    type;
    isPublic;
}
exports.UpdateSettingInput = UpdateSettingInput;
class BulkSettingInput {
    key;
    value;
}
exports.BulkSettingInput = BulkSettingInput;
class SkillItemInput {
    name;
    order;
}
exports.SkillItemInput = SkillItemInput;
class CreateSkillInput {
    title;
    description;
    variant;
    items;
    order;
    isActive;
}
exports.CreateSkillInput = CreateSkillInput;
class UpdateSkillInput {
    title;
    description;
    variant;
    items;
    order;
    isActive;
}
exports.UpdateSkillInput = UpdateSkillInput;
class CreateSocialLinkInput {
    platform;
    label;
    href;
    icon;
    order;
    isActive;
}
exports.CreateSocialLinkInput = CreateSocialLinkInput;
class UpdateSocialLinkInput {
    platform;
    label;
    href;
    icon;
    order;
    isActive;
}
exports.UpdateSocialLinkInput = UpdateSocialLinkInput;
class CreateTagInput {
    name;
    slug;
    description;
    color;
    order;
    isActive;
}
exports.CreateTagInput = CreateTagInput;
class UpdateTagInput {
    name;
    slug;
    description;
    color;
    order;
    isActive;
}
exports.UpdateTagInput = UpdateTagInput;
class CreateTeamMemberInput {
    name;
    position;
    bio;
    avatar;
    email;
    phone;
    socialLinks;
    skills;
    isActive;
}
exports.CreateTeamMemberInput = CreateTeamMemberInput;
class UpdateTeamMemberInput {
    name;
    position;
    bio;
    avatar;
    email;
    phone;
    socialLinks;
    skills;
    isActive;
}
exports.UpdateTeamMemberInput = UpdateTeamMemberInput;
class CreateUserInput {
    email;
    password;
    name;
    role;
}
exports.CreateUserInput = CreateUserInput;
class UpdateUserInput {
    email;
    password;
    name;
    role;
    isActive;
}
exports.UpdateUserInput = UpdateUserInput;
class CreateWorkExperienceInput {
    period;
    duration;
    company;
    position;
    technologies;
    isHighlighted;
    order;
    isActive;
}
exports.CreateWorkExperienceInput = CreateWorkExperienceInput;
class UpdateWorkExperienceInput {
    period;
    duration;
    company;
    position;
    technologies;
    isHighlighted;
    order;
    isActive;
}
exports.UpdateWorkExperienceInput = UpdateWorkExperienceInput;
class SocialLinks {
    __typename;
    linkedin;
    twitter;
    github;
    facebook;
}
exports.SocialLinks = SocialLinks;
class LinkDocument {
    __typename;
    url;
    fileName;
    type;
}
exports.LinkDocument = LinkDocument;
class IQuery {
    __typename;
}
exports.IQuery = IQuery;
class IMutation {
    __typename;
}
exports.IMutation = IMutation;
class Article {
    __typename;
    _id;
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    coverImage;
    tags;
    categories;
    status;
    publishedAt;
    author;
    readingTime;
    views;
    isFeatured;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.Article = Article;
class Address {
    __typename;
    street;
    city;
    country;
    zipCode;
}
exports.Address = Address;
class Company {
    __typename;
    _id;
    name;
    description;
    mission;
    vision;
    founded;
    employees;
    address;
    createdAt;
    updatedAt;
    deletedAt;
    deletedBy;
}
exports.Company = Company;
class ContactMessage {
    __typename;
    _id;
    name;
    email;
    phone;
    subject;
    message;
    isRead;
    createdAt;
}
exports.ContactMessage = ContactMessage;
class ContactInfo {
    __typename;
    _id;
    email;
    phone;
    address;
    workingHours;
    socialLinks;
    createdAt;
    updatedAt;
}
exports.ContactInfo = ContactInfo;
class Content {
    __typename;
    _id;
    title;
    slug;
    content;
    excerpt;
    type;
    status;
    featuredImage;
    tags;
    categories;
    metadata;
    author;
    publishedAt;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.Content = Content;
class PaginatedContent {
    __typename;
    data;
    total;
    page;
    limit;
    totalPages;
}
exports.PaginatedContent = PaginatedContent;
class Navigation {
    __typename;
    _id;
    label;
    href;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.Navigation = Navigation;
class ProjectLink {
    __typename;
    type;
    url;
    label;
}
exports.ProjectLink = ProjectLink;
class ProjectImage {
    __typename;
    url;
    alt;
    isFeatured;
    order;
}
exports.ProjectImage = ProjectImage;
class Project {
    __typename;
    _id;
    title;
    slug;
    description;
    content;
    excerpt;
    thumbnail;
    images;
    tags;
    technologies;
    links;
    status;
    startDate;
    endDate;
    isFeatured;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.Project = Project;
class Service {
    __typename;
    _id;
    title;
    description;
    icon;
    features;
    price;
    isActive;
    createdAt;
    updatedAt;
}
exports.Service = Service;
class Setting {
    __typename;
    _id;
    key;
    value;
    category;
    description;
    type;
    isPublic;
    isDefault;
    createdAt;
    updatedAt;
}
exports.Setting = Setting;
class SkillItem {
    __typename;
    name;
    order;
}
exports.SkillItem = SkillItem;
class Skill {
    __typename;
    _id;
    title;
    description;
    variant;
    items;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.Skill = Skill;
class SocialLink {
    __typename;
    _id;
    platform;
    label;
    href;
    icon;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.SocialLink = SocialLink;
class Tag {
    __typename;
    _id;
    name;
    slug;
    description;
    color;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.Tag = Tag;
class TeamMember {
    __typename;
    _id;
    name;
    position;
    bio;
    avatar;
    email;
    phone;
    socialLinks;
    skills;
    isActive;
    createdAt;
    updatedAt;
}
exports.TeamMember = TeamMember;
class User {
    __typename;
    _id;
    email;
    name;
    role;
    isActive;
    createdAt;
    updatedAt;
}
exports.User = User;
class WorkExperience {
    __typename;
    _id;
    period;
    duration;
    company;
    position;
    technologies;
    isHighlighted;
    order;
    isActive;
    createdAt;
    updatedAt;
}
exports.WorkExperience = WorkExperience;
//# sourceMappingURL=graphql.schema.js.map