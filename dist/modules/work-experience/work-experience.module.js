"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkExperienceModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const work_experience_service_1 = require("./work-experience.service");
const work_experience_resolver_1 = require("./work-experience.resolver");
const work_experience_schema_1 = require("./schemas/work-experience.schema");
let WorkExperienceModule = class WorkExperienceModule {
};
exports.WorkExperienceModule = WorkExperienceModule;
exports.WorkExperienceModule = WorkExperienceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: work_experience_schema_1.WorkExperience.name, schema: work_experience_schema_1.WorkExperienceSchema },
            ]),
        ],
        providers: [work_experience_resolver_1.WorkExperienceResolver, work_experience_service_1.WorkExperienceService],
        exports: [work_experience_service_1.WorkExperienceService],
    })
], WorkExperienceModule);
//# sourceMappingURL=work-experience.module.js.map