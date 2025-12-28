import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamService } from './team.service';
import { TeamResolver } from './team.resolver';
import { TeamMember, TeamMemberSchema } from './entities/team-member.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TeamMember.name, schema: TeamMemberSchema },
    ]),
  ],
  providers: [TeamResolver, TeamService],
  exports: [TeamService],
})
export class TeamModule {}
