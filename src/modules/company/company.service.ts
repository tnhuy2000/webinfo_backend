import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './entities/company.entity';
import { CreateCompanyInput, UpdateCompanyInput } from '../../graphql.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private readonly companyModel: Model<CompanyDocument>,
  ) {}

  async create(createCompanyInput: CreateCompanyInput): Promise<Company> {
    const company = new this.companyModel(createCompanyInput);
    return company.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companyModel.findById(id).exec();
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async update(
    id: string,
    updateCompanyInput: UpdateCompanyInput,
  ): Promise<Company> {
    const company = await this.companyModel
      .findByIdAndUpdate(id, updateCompanyInput, { new: true })
      .exec();
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.companyModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return true;
  }
}
