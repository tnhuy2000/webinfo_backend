import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Setting, SettingDocument } from './schemas/setting.schema';
import { CreateSettingInput, SettingCategory, UpdateSettingInput } from 'src/graphql.schema';

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
    return this.settingModel.find(filter).sort({ isDefault: 1}).exec();
  }

  async findByKey(key: string): Promise<SettingDocument> {
    const setting = await this.settingModel.findOne({ key }).exec();
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }
    return setting;
  }

  async findPublicSettings(): Promise<SettingDocument[]> {
    const settings = await this.settingModel
      .find({ isPublic: true })
      .exec();
    return settings;
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
    // Check if setting exists and is default
    const existingSetting = await this.settingModel.findOne({ key }).exec();

    if (!existingSetting) {
      throw new NotFoundException('Setting not found');
    }

    // If setting is default, only allow updating the value
    if (existingSetting.isDefault) {
      // Check if trying to update fields other than value
      // const forbiddenFields = Object.keys(updateSettingDto).filter(
      //   field => field !== 'value'
      // );
      // if (forbiddenFields.length > 0) {
      //   throw new BadRequestException(
      //     `Cannot modify ${forbiddenFields.join(', ')} of default system settings. Only 'value' can be updated.`
      //   );
      // }

      // Only update value
      const setting = await this.settingModel
        .findOneAndUpdate(
          { key },
          { value: updateSettingDto.value },
          { new: true }
        )
        .exec();

      return setting!;
    }

    // For non-default settings, allow full update
    const setting = await this.settingModel
      .findOneAndUpdate({ key }, updateSettingDto, { new: true })
      .exec();

    return setting!;
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
    // Check if setting exists and is not a default setting
    const setting = await this.settingModel.findOne({ key }).exec();
    if (!setting) {
      throw new NotFoundException('Setting not found');
    }

    if (setting.isDefault) {
      throw new BadRequestException('Cannot delete default system settings');
    }

    await this.settingModel.findOneAndDelete({ key }).exec();
  }

  async initializeDefaults(): Promise<void> {
    const defaults = [
      {
        key: 'ADMIN_LOGO',
        value: '', // Empty initially, admin can upload
        category: SettingCategory.GENERAL,
        description: 'Admin panel logo',
        type: 'IMAGE',
        isPublic: true,
        isDefault: true,
      },
      {
        key: 'SITE_NAME',
        value: 'My Admin CMS',
        category: SettingCategory.GENERAL,
        description: 'Website name',
        type: 'STRING',
        isPublic: true,
        isDefault: true,
      },
      {
        key: 'SITE_LOGO',
        value: '',
        category: SettingCategory.GENERAL,
        description: 'Public website logo',
        type: 'IMAGE',
        isPublic: true,
        isDefault: true,
      },
      {
        key: 'SITE_DESCRIPTION',
        value: 'A powerful CMS built with NestJS',
        category: SettingCategory.SEO,
        description: 'Website meta description',
        type: 'STRING',
        isPublic: true,
        isDefault: true,
      },
      {
        key: 'SEO_KEYWORDS',
        value: 'cms, nestjs, admin',
        category: SettingCategory.SEO,
        description: 'SEO keywords',
        type: 'STRING',
        isPublic: true,
        isDefault: true,
      },
      {
        key: 'ADMIN_EMAIL',
        value: 'admin@example.com',
        category: SettingCategory.CONTACT,
        description: 'Administrator email',
        type: 'STRING',
        isPublic: false,
        isDefault: true,
      },
      {
        key: 'ITEMS_PER_PAGE',
        value: 10,
        category: SettingCategory.GENERAL,
        description: 'Number of items per page',
        type: 'NUMBER',
        isPublic: false,
        isDefault: true,
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
