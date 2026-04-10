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
exports.TeamMemberSchema = exports.TeamMember = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
const social_links_type_1 = require("../../../common/types/social-links.type");
const id_helper_1 = require("../../../common/utils/id.helper");
let TeamMember = class TeamMember {
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
};
exports.TeamMember = TeamMember;
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: () => id_helper_1.IdHelper.generate() }),
    __metadata("design:type", String)
], TeamMember.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamMember.prototype, "bio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TeamMember.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamMember.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TeamMember.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: social_links_type_1.SocialLinks }),
    __metadata("design:type", social_links_type_1.SocialLinks)
], TeamMember.prototype, "socialLinks", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], TeamMember.prototype, "skills", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], TeamMember.prototype, "isActive", void 0);
exports.TeamMember = TeamMember = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.TEAM_MEMBERS,
    })
], TeamMember);
exports.TeamMemberSchema = mongoose_1.SchemaFactory.createForClass(TeamMember);
//# sourceMappingURL=team-member.entity.js.map