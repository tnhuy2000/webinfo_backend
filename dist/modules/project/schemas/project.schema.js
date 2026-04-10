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
exports.ProjectSchema = exports.Project = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
const graphql_schema_1 = require("../../../graphql.schema");
let Project = class Project {
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
};
exports.Project = Project;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Project.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Project.prototype, "slug", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Project.prototype, "excerpt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", graphql_schema_1.LinkDocument)
], Project.prototype, "thumbnail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [graphql_schema_1.ProjectImage], default: [] }),
    __metadata("design:type", Array)
], Project.prototype, "images", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Project.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], Project.prototype, "technologies", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [graphql_schema_1.ProjectLink], default: [] }),
    __metadata("design:type", Array)
], Project.prototype, "links", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: graphql_schema_1.ProjectStatus.draft }),
    __metadata("design:type", String)
], Project.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Project.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Project.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Project.prototype, "isFeatured", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Project.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Project.prototype, "isActive", void 0);
exports.Project = Project = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.PROJECTS,
    })
], Project);
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(Project);
//# sourceMappingURL=project.schema.js.map