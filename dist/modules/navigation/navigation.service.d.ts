import { Model } from 'mongoose';
import { Navigation, NavigationDocument } from './schemas/navigation.schema';
import { CreateNavigationInput, UpdateNavigationInput } from '../../graphql.schema';
export declare class NavigationService {
    private readonly navigationModel;
    constructor(navigationModel: Model<NavigationDocument>);
    create(input: CreateNavigationInput): Promise<Navigation>;
    findAll(isActive?: boolean): Promise<Navigation[]>;
    findById(id: string): Promise<Navigation>;
    update(id: string, input: UpdateNavigationInput): Promise<Navigation>;
    delete(id: string): Promise<boolean>;
}
