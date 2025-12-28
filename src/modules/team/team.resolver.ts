import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TeamService } from './team.service';
import {
  CreateTeamMemberInput,
  UpdateTeamMemberInput,
} from '../../graphql.schema';

@Resolver('TeamMember')
export class TeamResolver {
  constructor(private readonly teamService: TeamService) {}

  @Mutation('createTeamMember')
  async createTeamMember(
    @Args('input') createTeamMemberInput: CreateTeamMemberInput,
  ) {
    return this.teamService.create(createTeamMemberInput);
  }

  @Query('teamMembers')
  async findAll(@Args('isActive') isActive?: boolean) {
    return this.teamService.findAll(isActive);
  }

  @Query('teamMember')
  async findOne(@Args('id') id: string) {
    return this.teamService.findOne(id);
  }

  @Mutation('updateTeamMember')
  async updateTeamMember(
    @Args('id') id: string,
    @Args('input') updateTeamMemberInput: UpdateTeamMemberInput,
  ) {
    return this.teamService.update(id, updateTeamMemberInput);
  }

  @Mutation('removeTeamMember')
  async removeTeamMember(@Args('id') id: string) {
    return this.teamService.remove(id);
  }
}
