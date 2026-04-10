import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { CreateSkillInput, UpdateSkillInput } from '../../graphql.schema';

@Resolver('Skill')
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Query('skills')
  async skills(@Args('isActive') isActive?: boolean) {
    return this.skillService.findAll(isActive);
  }

  @Query('skill')
  async skill(@Args('id') id: string) {
    return this.skillService.findById(id);
  }

  @Mutation('createSkill')
  async createSkill(@Args('input') input: CreateSkillInput) {
    return this.skillService.create(input);
  }

  @Mutation('updateSkill')
  async updateSkill(
    @Args('id') id: string,
    @Args('input') input: UpdateSkillInput,
  ) {
    return this.skillService.update(id, input);
  }

  @Mutation('deleteSkill')
  async deleteSkill(@Args('id') id: string) {
    return this.skillService.delete(id);
  }
}
