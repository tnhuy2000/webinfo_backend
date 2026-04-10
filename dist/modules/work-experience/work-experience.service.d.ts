import { Model } from 'mongoose';
import { WorkExperience, WorkExperienceDocument } from './schemas/work-experience.schema';
import { CreateWorkExperienceInput, UpdateWorkExperienceInput } from '../../graphql.schema';
export declare class WorkExperienceService {
    private readonly workExperienceModel;
    constructor(workExperienceModel: Model<WorkExperienceDocument>);
    create(input: CreateWorkExperienceInput): Promise<WorkExperience>;
    findAll(isActive?: boolean): Promise<WorkExperience[]>;
    findById(id: string): Promise<WorkExperience>;
    update(id: string, input: UpdateWorkExperienceInput): Promise<WorkExperience>;
    delete(id: string): Promise<boolean>;
}
