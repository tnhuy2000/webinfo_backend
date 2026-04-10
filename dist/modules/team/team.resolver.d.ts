import { TeamService } from './team.service';
import { CreateTeamMemberInput, UpdateTeamMemberInput } from '../../graphql.schema';
export declare class TeamResolver {
    private readonly teamService;
    constructor(teamService: TeamService);
    createTeamMember(createTeamMemberInput: CreateTeamMemberInput): Promise<import("./entities/team-member.entity").TeamMember>;
    findAll(isActive?: boolean): Promise<import("./entities/team-member.entity").TeamMember[]>;
    findOne(id: string): Promise<import("./entities/team-member.entity").TeamMember>;
    updateTeamMember(id: string, updateTeamMemberInput: UpdateTeamMemberInput): Promise<import("./entities/team-member.entity").TeamMember>;
    removeTeamMember(id: string): Promise<boolean>;
}
