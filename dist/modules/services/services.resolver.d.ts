import { ServicesService } from './services.service';
import { CreateServiceInput, UpdateServiceInput } from '../../graphql.schema';
export declare class ServicesResolver {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    createService(createServiceInput: CreateServiceInput): Promise<import("./entities/service.entity").Service>;
    findAll(isActive?: boolean): Promise<import("./entities/service.entity").Service[]>;
    findOne(id: string): Promise<import("./entities/service.entity").Service>;
    updateService(id: string, updateServiceInput: UpdateServiceInput): Promise<import("./entities/service.entity").Service>;
    removeService(id: string): Promise<boolean>;
}
