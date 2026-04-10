"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinkModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const social_link_service_1 = require("./social-link.service");
const social_link_resolver_1 = require("./social-link.resolver");
const social_link_schema_1 = require("./schemas/social-link.schema");
let SocialLinkModule = class SocialLinkModule {
};
exports.SocialLinkModule = SocialLinkModule;
exports.SocialLinkModule = SocialLinkModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: social_link_schema_1.SocialLink.name, schema: social_link_schema_1.SocialLinkSchema },
            ]),
        ],
        providers: [social_link_resolver_1.SocialLinkResolver, social_link_service_1.SocialLinkService],
        exports: [social_link_service_1.SocialLinkService],
    })
], SocialLinkModule);
//# sourceMappingURL=social-link.module.js.map