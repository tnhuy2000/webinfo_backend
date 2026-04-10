import { CompanyService } from './company.service';
import { CreateCompanyInput, UpdateCompanyInput } from '../../graphql.schema';
export declare class CompanyResolver {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(createCompanyInput: CreateCompanyInput): Promise<import("./entities/company.entity").Company>;
    findAll(): Promise<import("./entities/company.entity").Company[]>;
    findOne(id: string): Promise<import("./entities/company.entity").Company>;
    updateCompany(id: string, updateCompanyInput: UpdateCompanyInput): Promise<import("./entities/company.entity").Company>;
    removeCompany(id: string): Promise<boolean>;
}
