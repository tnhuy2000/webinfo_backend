import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from './schemas/skill.schema';
import { CreateSkillInput, UpdateSkillInput } from '../../graphql.schema';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel(Skill.name)
    private readonly skillModel: Model<SkillDocument>,
  ) {}

  async create(input: CreateSkillInput): Promise<Skill> {
    const skill = new this.skillModel(input);
    return skill.save();
  }

  async findAll(isActive?: boolean): Promise<Skill[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.skillModel.find(filter).sort({ order: 1 }).exec();
  }

  async findById(id: string): Promise<Skill> {
    const skill = await this.skillModel.findById(id).exec();
    if (!skill) {
      throw new NotFoundException(`Skill with ID ${id} not found`);
    }
    return skill;
  }

  async update(id: string, input: UpdateSkillInput): Promise<Skill> {
    const skill = await this.skillModel
      .findByIdAndUpdate(id, input, { new: true })
      .exec();
    if (!skill) {
      throw new NotFoundException(`Skill with ID ${id} not found`);
    }
    return skill;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.skillModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Skill with ID ${id} not found`);
    }
    return true;
  }
}
