import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { CompanyModule } from './modules/company/company.module';
import { ServicesModule } from './modules/services/services.module';
import { TeamModule } from './modules/team/team.module';
import { ContactModule } from './modules/contact/contact.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ContentModule } from './modules/content/content.module';
import { SettingsModule } from './modules/settings/settings.module';
import { UploadModule } from './modules/upload/upload.module';
import { DateScalar } from './common/scalars/date.scalar';
import { JSONScalar } from './common/scalars/json.scalar';
import { graphqlConfig } from './config/graphql.config';
import databaseConfig from './config/database.config';

// Portfolio Modules
import { NavigationModule } from './modules/navigation/navigation.module';
import { SocialLinkModule } from './modules/social-link/social-link.module';
import { SkillModule } from './modules/skill/skill.module';
import { WorkExperienceModule } from './modules/work-experience/work-experience.module';
import { TagModule } from './modules/tag/tag.module';
import { ProjectModule } from './modules/project/project.module';
import { ArticleModule } from './modules/article/article.module';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
@Module({
  imports: [
    // Config Module
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
      envFilePath: '.env',
    }),

    // GraphQL Module - Schema First
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      ...graphqlConfig,
    }),

    // Database Module
    DatabaseModule,

    // REST API Modules
    AuthModule, // JWT Authentication
    UploadModule, // File Upload

    // CMS Modules (GraphQL - Schema First)
    UsersModule,
    ContentModule,
    SettingsModule,

    // Public Website Modules (GraphQL - Schema First)
    CompanyModule,
    ServicesModule,
    TeamModule,
    ContactModule,

    // Portfolio Modules (GraphQL - Schema First)
    NavigationModule,
    SocialLinkModule,
    SkillModule,
    WorkExperienceModule,
    TagModule,
    ProjectModule,
    ArticleModule,
    CloudinaryModule
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar, JSONScalar],
})
export class AppModule {}
