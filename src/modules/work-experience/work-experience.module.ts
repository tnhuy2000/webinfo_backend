import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkExperienceService } from './work-experience.service';
import { WorkExperienceResolver } from './work-experience.resolver';
import { WorkExperience, WorkExperienceSchema } from './schemas/work-experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkExperience.name, schema: WorkExperienceSchema },
    ]),
  ],
  providers: [WorkExperienceResolver, WorkExperienceService],
  exports: [WorkExperienceService],
})
export class WorkExperienceModule {}
