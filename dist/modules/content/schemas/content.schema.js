"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentSchema = exports.Content = exports.ContentStatus = exports.ContentType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
var ContentType;
(function (ContentType) {
    ContentType["PAGE"] = "page";
    ContentType["POST"] = "post";
    ContentType["BLOG"] = "blog";
    ContentType["BANNER"] = "banner";
    ContentType["MENU"] = "menu";
})(ContentType || (exports.ContentType = ContentType = {}));
var ContentStatus;
(function (ContentStatus) {
    ContentStatus["DRAFT"] = "draft";
    ContentStatus["PUBLISHED"] = "published";
    ContentStatus["ARCHIVED"] = "archived";
})(ContentStatus || (exports.ContentStatus = ContentStatus = {}));
let Content = class Content {
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
};
exports.Content = Content;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Content.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Content.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Content.prototype, "excerpt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ContentType, default: ContentType.POST }),
    __metadata("design:type", String)
], Content.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ContentStatus, default: ContentStatus.DRAFT }),
    __metadata("design:type", String)
], Content.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Content.prototype, "featuredImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Content.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Content.prototype, "categories", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, default: {} }),
    __metadata("design:type", Object)
], Content.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Content.prototype, "author", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], Content.prototype, "publishedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, default: 0 }),
    __metadata("design:type", Number)
], Content.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Content.prototype, "isActive", void 0);
exports.Content = Content = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.CONTENTS,
    })
], Content);
exports.ContentSchema = mongoose_1.SchemaFactory.createForClass(Content);
//# sourceMappingURL=content.schema.js.map