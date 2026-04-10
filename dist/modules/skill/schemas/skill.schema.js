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
exports.SkillSchema = exports.Skill = exports.SkillItemSchema = exports.SkillItem = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
const graphql_schema_1 = require("../../../graphql.schema");
let SkillItem = class SkillItem {
    name;
    order;
};
exports.SkillItem = SkillItem;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SkillItem.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], SkillItem.prototype, "order", void 0);
exports.SkillItem = SkillItem = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SkillItem);
exports.SkillItemSchema = mongoose_1.SchemaFactory.createForClass(SkillItem);
let Skill = class Skill {
    title;
    description;
    variant;
    items;
    order;
    isActive;
};
exports.Skill = Skill;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Skill.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Skill.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], Skill.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [exports.SkillItemSchema], default: [] }),
    __metadata("design:type", Array)
], Skill.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Skill.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Skill.prototype, "isActive", void 0);
exports.Skill = Skill = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.SKILLS,
    })
], Skill);
exports.SkillSchema = mongoose_1.SchemaFactory.createForClass(Skill);
//# sourceMappingURL=skill.schema.js.map