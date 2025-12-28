import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CreateCompanyInput, UpdateCompanyInput } from '../../graphql.schema';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation('createCompany')
  async createCompany(@Args('input') createCompanyInput: CreateCompanyInput) {
    return this.companyService.create(createCompanyInput);
  }

  @Query('companies')
  async findAll() {
    return this.companyService.findAll();
  }

  @Query('company')
  async findOne(@Args('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Mutation('updateCompany')
  async updateCompany(
    @Args('id') id: string,
    @Args('input') updateCompanyInput: UpdateCompanyInput,
  ) {
    return this.companyService.update(id, updateCompanyInput);
  }

  @Mutation('removeCompany')
  async removeCompany(@Args('id') id: string) {
    return this.companyService.remove(id);
  }
}
