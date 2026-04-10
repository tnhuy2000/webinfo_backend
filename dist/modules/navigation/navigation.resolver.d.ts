import { NavigationService } from './navigation.service';
import { CreateNavigationInput, UpdateNavigationInput } from '../../graphql.schema';
export declare class NavigationResolver {
    private readonly navigationService;
    constructor(navigationService: NavigationService);
    navigations(isActive?: boolean): Promise<import("./schemas/navigation.schema").Navigation[]>;
    navigation(id: string): Promise<import("./schemas/navigation.schema").Navigation>;
    createNavigation(input: CreateNavigationInput): Promise<import("./schemas/navigation.schema").Navigation>;
    updateNavigation(id: string, input: UpdateNavigationInput): Promise<import("./schemas/navigation.schema").Navigation>;
    deleteNavigation(id: string): Promise<boolean>;
}
