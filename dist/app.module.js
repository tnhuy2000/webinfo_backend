"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./modules/database/database.module");
const company_module_1 = require("./modules/company/company.module");
const services_module_1 = require("./modules/services/services.module");
const team_module_1 = require("./modules/team/team.module");
const contact_module_1 = require("./modules/contact/contact.module");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const content_module_1 = require("./modules/content/content.module");
const settings_module_1 = require("./modules/settings/settings.module");
const upload_module_1 = require("./modules/upload/upload.module");
const date_scalar_1 = require("./common/scalars/date.scalar");
const json_scalar_1 = require("./common/scalars/json.scalar");
const graphql_config_1 = require("./config/graphql.config");
const database_config_1 = __importDefault(require("./config/database.config"));
const navigation_module_1 = require("./modules/navigation/navigation.module");
const social_link_module_1 = require("./modules/social-link/social-link.module");
const skill_module_1 = require("./modules/skill/skill.module");
const work_experience_module_1 = require("./modules/work-experience/work-experience.module");
const tag_module_1 = require("./modules/tag/tag.module");
const project_module_1 = require("./modules/project/project.module");
const article_module_1 = require("./modules/article/article.module");
const cloudinary_module_1 = require("./modules/cloudinary/cloudinary.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [database_config_1.default],
                envFilePath: '.env',
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                ...graphql_config_1.graphqlConfig,
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            upload_module_1.UploadModule,
            users_module_1.UsersModule,
            content_module_1.ContentModule,
            settings_module_1.SettingsModule,
            company_module_1.CompanyModule,
            services_module_1.ServicesModule,
            team_module_1.TeamModule,
            contact_module_1.ContactModule,
            navigation_module_1.NavigationModule,
            social_link_module_1.SocialLinkModule,
            skill_module_1.SkillModule,
            work_experience_module_1.WorkExperienceModule,
            tag_module_1.TagModule,
            project_module_1.ProjectModule,
            article_module_1.ArticleModule,
            cloudinary_module_1.CloudinaryModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, date_scalar_1.DateScalar, json_scalar_1.JSONScalar],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map