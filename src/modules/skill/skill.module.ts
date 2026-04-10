import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillService } from './skill.service';
import { SkillResolver } from './skill.resolver';
import { Skill, SkillSchema } from './schemas/skill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }]),
  ],
  providers: [SkillResolver, SkillService],
  exports: [SkillService],
})
export class SkillModule {}
