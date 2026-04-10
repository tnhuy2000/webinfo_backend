import { WorkExperienceService } from './work-experience.service';
import { CreateWorkExperienceInput, UpdateWorkExperienceInput } from '../../graphql.schema';
export declare class WorkExperienceResolver {
    private readonly workExperienceService;
    constructor(workExperienceService: WorkExperienceService);
    workExperiences(isActive?: boolean): Promise<import("./schemas/work-experience.schema").WorkExperience[]>;
    workExperience(id: string): Promise<import("./schemas/work-experience.schema").WorkExperience>;
    createWorkExperience(input: CreateWorkExperienceInput): Promise<import("./schemas/work-experience.schema").WorkExperience>;
    updateWorkExperience(id: string, input: UpdateWorkExperienceInput): Promise<import("./schemas/work-experience.schema").WorkExperience>;
    deleteWorkExperience(id: string): Promise<boolean>;
}
