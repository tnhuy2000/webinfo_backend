import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import {
  CreateProjectInput,
  UpdateProjectInput,
  ProjectStatus,
} from '../../graphql.schema';

@Resolver('Project')
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query('projects')
  async projects(
    @Args('isActive') isActive?: boolean,
    @Args('isFeatured') isFeatured?: boolean,
    @Args('status') status?: ProjectStatus,
  ) {
    return this.projectService.findAll(isActive, isFeatured, status);
  }

  @Query('project')
  async project(@Args('id') id: string) {
    return this.projectService.findById(id);
  }

  @Query('projectBySlug')
  async projectBySlug(@Args('slug') slug: string) {
    return this.projectService.findBySlug(slug);
  }

  @Mutation('createProject')
  async createProject(@Args('input') input: CreateProjectInput) {
    return this.projectService.create(input);
  }

  @Mutation('updateProject')
  async updateProject(
    @Args('id') id: string,
    @Args('input') input: UpdateProjectInput,
  ) {
    return this.projectService.update(id, input);
  }

  @Mutation('deleteProject')
  async deleteProject(@Args('id') id: string) {
    return this.projectService.delete(id);
  }
}
