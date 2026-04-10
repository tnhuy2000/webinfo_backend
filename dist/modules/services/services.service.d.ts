import { Model } from 'mongoose';
import { Service, ServiceDocument } from './entities/service.entity';
import { CreateServiceInput, UpdateServiceInput } from '../../graphql.schema';
export declare class ServicesService {
    private readonly serviceModel;
    constructor(serviceModel: Model<ServiceDocument>);
    create(createServiceInput: CreateServiceInput): Promise<Service>;
    findAll(isActive?: boolean): Promise<Service[]>;
    findOne(id: string): Promise<Service>;
    update(id: string, updateServiceInput: UpdateServiceInput): Promise<Service>;
    remove(id: string): Promise<boolean>;
}
