import { SkillService } from './skill.service';
import { CreateSkillInput, UpdateSkillInput } from '../../graphql.schema';
export declare class SkillResolver {
    private readonly skillService;
    constructor(skillService: SkillService);
    skills(isActive?: boolean): Promise<import("./schemas/skill.schema").Skill[]>;
    skill(id: string): Promise<import("./schemas/skill.schema").Skill>;
    createSkill(input: CreateSkillInput): Promise<import("./schemas/skill.schema").Skill>;
    updateSkill(id: string, input: UpdateSkillInput): Promise<import("./schemas/skill.schema").Skill>;
    deleteSkill(id: string): Promise<boolean>;
}
