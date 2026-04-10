import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { WorkExperienceService } from './work-experience.service';
import {
  CreateWorkExperienceInput,
  UpdateWorkExperienceInput,
} from '../../graphql.schema';

@Resolver('WorkExperience')
export class WorkExperienceResolver {
  constructor(private readonly workExperienceService: WorkExperienceService) {}

  @Query('workExperiences')
  async workExperiences(@Args('isActive') isActive?: boolean) {
    return this.workExperienceService.findAll(isActive);
  }

  @Query('workExperience')
  async workExperience(@Args('id') id: string) {
    return this.workExperienceService.findById(id);
  }

  @Mutation('createWorkExperience')
  async createWorkExperience(@Args('input') input: CreateWorkExperienceInput) {
    return this.workExperienceService.create(input);
  }

  @Mutation('updateWorkExperience')
  async updateWorkExperience(
    @Args('id') id: string,
    @Args('input') input: UpdateWorkExperienceInput,
  ) {
    return this.workExperienceService.update(id, input);
  }

  @Mutation('deleteWorkExperience')
  async deleteWorkExperience(@Args('id') id: string) {
    return this.workExperienceService.delete(id);
  }
}
