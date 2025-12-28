import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServicesService } from './services.service';
import { CreateServiceInput, UpdateServiceInput } from '../../graphql.schema';

@Resolver('Service')
export class ServicesResolver {
  constructor(private readonly servicesService: ServicesService) {}

  @Mutation('createService')
  async createService(@Args('input') createServiceInput: CreateServiceInput) {
    return this.servicesService.create(createServiceInput);
  }

  @Query('services')
  async findAll(@Args('isActive') isActive?: boolean) {
    return this.servicesService.findAll(isActive);
  }

  @Query('service')
  async findOne(@Args('id') id: string) {
    return this.servicesService.findOne(id);
  }

  @Mutation('updateService')
  async updateService(
    @Args('id') id: string,
    @Args('input') updateServiceInput: UpdateServiceInput,
  ) {
    return this.servicesService.update(id, updateServiceInput);
  }

  @Mutation('removeService')
  async removeService(@Args('id') id: string) {
    return this.servicesService.remove(id);
  }
}
