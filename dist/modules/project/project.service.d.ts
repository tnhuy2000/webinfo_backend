import { Model } from 'mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { CreateProjectInput, UpdateProjectInput, ProjectStatus } from '../../graphql.schema';
export declare class ProjectService {
    private readonly projectModel;
    constructor(projectModel: Model<ProjectDocument>);
    create(input: CreateProjectInput): Promise<Project>;
    findAll(isActive?: boolean, isFeatured?: boolean, status?: ProjectStatus): Promise<Project[]>;
    findById(id: string): Promise<Project>;
    findBySlug(slug: string): Promise<Project>;
    update(id: string, input: UpdateProjectInput): Promise<Project>;
    delete(id: string): Promise<boolean>;
}
