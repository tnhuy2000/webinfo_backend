import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeamMember, TeamMemberDocument } from './entities/team-member.entity';
import {
  CreateTeamMemberInput,
  UpdateTeamMemberInput,
} from '../../graphql.schema';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(TeamMember.name)
    private readonly teamMemberModel: Model<TeamMemberDocument>,
  ) {}

  async create(
    createTeamMemberInput: CreateTeamMemberInput,
  ): Promise<TeamMember> {
    const teamMember = new this.teamMemberModel(createTeamMemberInput);
    return teamMember.save();
  }

  async findAll(isActive?: boolean): Promise<TeamMember[]> {
    const filter = isActive !== undefined ? { isActive } : {};
    return this.teamMemberModel.find(filter).exec();
  }

  async findOne(id: string): Promise<TeamMember> {
    const teamMember = await this.teamMemberModel.findById(id).exec();
    if (!teamMember) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return teamMember;
  }

  async update(
    id: string,
    updateTeamMemberInput: UpdateTeamMemberInput,
  ): Promise<TeamMember> {
    const teamMember = await this.teamMemberModel
      .findByIdAndUpdate(id, updateTeamMemberInput, { new: true })
      .exec();
    if (!teamMember) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return teamMember;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.teamMemberModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Team member with ID ${id} not found`);
    }
    return true;
  }
}
