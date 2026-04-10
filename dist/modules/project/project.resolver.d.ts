import { ProjectService } from './project.service';
import { CreateProjectInput, UpdateProjectInput, ProjectStatus } from '../../graphql.schema';
export declare class ProjectResolver {
    private readonly projectService;
    constructor(projectService: ProjectService);
    projects(isActive?: boolean, isFeatured?: boolean, status?: ProjectStatus): Promise<import("./schemas/project.schema").Project[]>;
    project(id: string): Promise<import("./schemas/project.schema").Project>;
    projectBySlug(slug: string): Promise<import("./schemas/project.schema").Project>;
    createProject(input: CreateProjectInput): Promise<import("./schemas/project.schema").Project>;
    updateProject(id: string, input: UpdateProjectInput): Promise<import("./schemas/project.schema").Project>;
    deleteProject(id: string): Promise<boolean>;
}
