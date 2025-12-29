import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';

@Resolver('Setting')
export class SettingsResolver {
  constructor(private readonly settingsService: SettingsService) {}

  @Query('settings')
  @UseGuards(GqlAuthGuard)
  async getSettings(@Args('category') category?: string) {
    return this.settingsService.findAll(category as any);
  }

  @Query('setting')
  @UseGuards(GqlAuthGuard)
  async getSetting(@Args('key') key: string) {
    return this.settingsService.findByKey(key);
  }

  @Query('publicSettings')
  async getPublicSettings() {
    return this.settingsService.findPublicSettings();
  }

  @Query('allSettingsAsObject')
  @UseGuards(GqlAuthGuard)
  async getAllSettingsAsObject() {
    return this.settingsService.getAllAsObject();
  }

  @Mutation('createSetting')
  @UseGuards(GqlAuthGuard)
  async createSetting(@Args('input') input: any) {
    return this.settingsService.create(input);
  }

  @Mutation('updateSetting')
  @UseGuards(GqlAuthGuard)
  async updateSetting(@Args('key') key: string, @Args('input') input: any) {
    return this.settingsService.update(key, input);
  }

  @Mutation('bulkUpdateSettings')
  @UseGuards(GqlAuthGuard)
  async bulkUpdateSettings(@Args('settings') settings: any[]) {
    const result = await this.settingsService.bulkUpdate(settings);
    return result.updated;
  }

  @Mutation('deleteSetting')
  @UseGuards(GqlAuthGuard)
  async deleteSetting(@Args('key') key: string) {
    await this.settingsService.delete(key);
    return true;
  }

  @Mutation('initializeDefaultSettings')
  @UseGuards(GqlAuthGuard)
  async initializeDefaultSettings() {
    await this.settingsService.initializeDefaults();
    return true;
  }
}
