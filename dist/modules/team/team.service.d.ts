import { Model } from 'mongoose';
import { TeamMember, TeamMemberDocument } from './entities/team-member.entity';
import { CreateTeamMemberInput, UpdateTeamMemberInput } from '../../graphql.schema';
export declare class TeamService {
    private readonly teamMemberModel;
    constructor(teamMemberModel: Model<TeamMemberDocument>);
    create(createTeamMemberInput: CreateTeamMemberInput): Promise<TeamMember>;
    findAll(isActive?: boolean): Promise<TeamMember[]>;
    findOne(id: string): Promise<TeamMember>;
    update(id: string, updateTeamMemberInput: UpdateTeamMemberInput): Promise<TeamMember>;
    remove(id: string): Promise<boolean>;
}
