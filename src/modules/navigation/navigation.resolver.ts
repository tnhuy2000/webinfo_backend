import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NavigationService } from './navigation.service';
import {
  CreateNavigationInput,
  UpdateNavigationInput,
} from '../../graphql.schema';

@Resolver('Navigation')
export class NavigationResolver {
  constructor(private readonly navigationService: NavigationService) {}

  @Query('navigations')
  async navigations(@Args('isActive') isActive?: boolean) {
    return this.navigationService.findAll(isActive);
  }

  @Query('navigation')
  async navigation(@Args('id') id: string) {
    return this.navigationService.findById(id);
  }

  @Mutation('createNavigation')
  async createNavigation(@Args('input') input: CreateNavigationInput) {
    return this.navigationService.create(input);
  }

  @Mutation('updateNavigation')
  async updateNavigation(
    @Args('id') id: string,
    @Args('input') input: UpdateNavigationInput,
  ) {
    return this.navigationService.update(id, input);
  }

  @Mutation('deleteNavigation')
  async deleteNavigation(@Args('id') id: string) {
    return this.navigationService.delete(id);
  }
}
