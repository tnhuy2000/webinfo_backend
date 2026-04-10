import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkExperience, WorkExperienceDocument } from './schemas/work-experience.schema';
import {
  CreateWorkExperienceInput,
  UpdateWorkExperienceInput,
} from '../../graphql.schema';

@Injectable()
export class WorkExperienceService {
  constructor(
    @InjectModel(WorkExperience.name)
    private readonly workExperienceModel: Model<WorkExperienceDocument>,
  ) {}

  async create(input: CreateWorkExperienceInput): Promise<WorkExperience> {
    const workExperience = new this.workExperienceModel(input);
    return workExperience.save();
  }

  async findAll(isActive?: boolean): Promise<WorkExperience[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.workExperienceModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<WorkExperience> {
    const workExperience = await this.workExperienceModel.findById(id).exec();
    if (!workExperience) {
      throw new NotFoundException(`WorkExperience with ID ${id} not found`);
    }
    return workExperience;
  }

  async update(
    id: string,
    input: UpdateWorkExperienceInput,
  ): Promise<WorkExperience> {
    const workExperience = await this.workExperienceModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!workExperience) {
      throw new NotFoundException(`WorkExperience with ID ${id} not found`);
    }
    return workExperience;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.workExperienceModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`WorkExperience with ID ${id} not found`);
    }
    return true;
  }
}
