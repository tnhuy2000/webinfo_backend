import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import {
  CreateProjectInput,
  UpdateProjectInput,
  ProjectStatus,
} from '../../graphql.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<ProjectDocument>,
  ) {}

  async create(input: CreateProjectInput): Promise<Project> {
    const project = new this.projectModel(input);
    return project.save();
  }

  async findAll(
    isActive?: boolean,
    isFeatured?: boolean,
    status?: ProjectStatus,
  ): Promise<Project[]> {
    const filter: Record<string, unknown> = {};
    if (isActive !== undefined) filter.isActive = isActive;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured;
    if (status !== undefined) filter.status = status;
    return this.projectModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  async findBySlug(slug: string): Promise<Project> {
    const project = await this.projectModel.findOne({ slug }).exec();
    if (!project) {
      throw new NotFoundException(`Project with slug ${slug} not found`);
    }
    return project;
  }

  async update(id: string, input: UpdateProjectInput): Promise<Project> {
    const project = await this.projectModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.projectModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return true;
  }
}
