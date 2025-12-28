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
import { DateScalar } from './common/scalars/date.scalar';
import { graphqlConfig } from './config/graphql.config';
import databaseConfig from './config/database.config';

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

    // Feature Modules
    CompanyModule,
    ServicesModule,
    TeamModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {}
