import { Model } from 'mongoose';
import { Company, CompanyDocument } from './entities/company.entity';
import { CreateCompanyInput, UpdateCompanyInput } from '../../graphql.schema';
export declare class CompanyService {
    private readonly companyModel;
    constructor(companyModel: Model<CompanyDocument>);
    create(createCompanyInput: CreateCompanyInput): Promise<Company>;
    findAll(): Promise<Company[]>;
    findOne(id: string): Promise<Company>;
    update(id: string, updateCompanyInput: UpdateCompanyInput): Promise<Company>;
    remove(id: string): Promise<boolean>;
}
