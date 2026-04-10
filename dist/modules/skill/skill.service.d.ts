import { Model } from 'mongoose';
import { Skill, SkillDocument } from './schemas/skill.schema';
import { CreateSkillInput, UpdateSkillInput } from '../../graphql.schema';
export declare class SkillService {
    private readonly skillModel;
    constructor(skillModel: Model<SkillDocument>);
    create(input: CreateSkillInput): Promise<Skill>;
    findAll(isActive?: boolean): Promise<Skill[]>;
    findById(id: string): Promise<Skill>;
    update(id: string, input: UpdateSkillInput): Promise<Skill>;
    delete(id: string): Promise<boolean>;
}
