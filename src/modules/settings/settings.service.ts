import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting, SettingDocument, SettingCategory } from './schemas/setting.schema';
import { CreateSettingInput, UpdateSettingInput } from 'src/graphql.schema';

@Injectable()
export class SettingsService {
  constructor(
    @InjectModel(Setting.name) private settingModel: Model<SettingDocument>,
  ) {}

  async create(createSettingDto: CreateSettingInput): Promise<SettingDocument> {
    const existingSetting = await this.settingModel
      .findOne({ key: createSettingDto.key })
      .exec();

    if (existingSetting) {
      throw new ConflictException('Setting key already exists');
    }

    const newSetting = new this.settingModel(createSettingDto);
    return newSetting.save();
  }

  async findAll(category?: SettingCategory): Promise<SettingDocument[]> {
    const filter = category ? { category } : {};
    return this.settingModel.find(filter).exec();
  }

  async findByKey(key: string): Promise<SettingDocument> {
    const setting = await this.settingModel.findOne({ key }).exec();
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }
    return setting;
  }

  async findPublicSettings(): Promise<Record<string, any>> {
    const settings = await this.settingModel
      .find({ isPublic: true })
      .exec();

    const settingsObject: Record<string, any> = {};
    settings.forEach((setting) => {
      settingsObject[setting.key] = setting.value;
    });

    return settingsObject;
  }

  async getAllAsObject(): Promise<Record<string, any>> {
    const settings = await this.settingModel.find().exec();
    const settingsObject: Record<string, any> = {};
    settings.forEach((setting) => {
      settingsObject[setting.key] = setting.value;
    });
    return settingsObject;
  }

  async update(
    key: string,
    updateSettingDto: UpdateSettingInput,
  ): Promise<SettingDocument> {
    const setting = await this.settingModel
      .findOneAndUpdate({ key }, updateSettingDto, { new: true })
      .exec();

    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    return setting;
  }

  async bulkUpdate(
    updates: Array<{ key: string; value: any }>,
  ): Promise<{ updated: number }> {
    let updated = 0;

    for (const update of updates) {
      const result = await this.settingModel
        .updateOne({ key: update.key }, { value: update.value })
        .exec();
      if (result.modifiedCount > 0) {
        updated++;
      }
    }

    return { updated };
  }

  async delete(key: string): Promise<void> {
    const result = await this.settingModel.findOneAndDelete({ key }).exec();
    if (!result) {
      throw new NotFoundException('Setting not found');
    }
  }

  async initializeDefaults(): Promise<void> {
    const defaults = [
      {
        key: 'site_name',
        value: 'My Admin CMS',
        category: SettingCategory.GENERAL,
        description: 'Website name',
        type: 'text',
        isPublic: true,
      },
      {
        key: 'site_description',
        value: 'A powerful CMS built with NestJS',
        category: SettingCategory.GENERAL,
        description: 'Website description',
        type: 'text',
        isPublic: true,
      },
      {
        key: 'admin_email',
        value: 'admin@example.com',
        category: SettingCategory.GENERAL,
        description: 'Administrator email',
        type: 'email',
        isPublic: false,
      },
      {
        key: 'items_per_page',
        value: 10,
        category: SettingCategory.GENERAL,
        description: 'Number of items per page',
        type: 'number',
        isPublic: false,
      },
    ];

    for (const defaultSetting of defaults) {
      const exists = await this.settingModel
        .findOne({ key: defaultSetting.key })
        .exec();
      if (!exists) {
        await new this.settingModel(defaultSetting).save();
      }
    }
  }
}
