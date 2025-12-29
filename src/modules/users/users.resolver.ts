import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver('User')
@UseGuards(GqlAuthGuard)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('users')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Query('user')
  async getUser(@Args('id') id: string) {
    return this.usersService.findById(id);
  }

  @Query('me')
  async getMe(@Context() context: any) {
    const userId = context.req.user.userId;
    const user = await this.usersService.findById(userId);
    if (!user) {
      return null;
    }
    const { password, refreshToken, ...result } = user.toObject();
    return result;
  }

  @Mutation('createUser')
  async createUser(@Args('input') input: any) {
    const user = await this.usersService.create(
      input.email,
      input.password,
      input.name,
    );
    const { password, refreshToken, ...result } = user.toObject();
    return result;
  }

  @Mutation('updateUser')
  async updateUser(@Args('id') id: string, @Args('input') input: any) {
    return this.usersService.update(id, input);
  }

  @Mutation('deleteUser')
  async deleteUser(@Args('id') id: string) {
    await this.usersService.delete(id);
    return true;
  }
}
