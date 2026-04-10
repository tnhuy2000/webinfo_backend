import { Model } from 'mongoose';
import { SettingDocument } from './schemas/setting.schema';
import { CreateSettingInput, SettingCategory, UpdateSettingInput } from 'src/graphql.schema';
export declare class SettingsService {
    private settingModel;
    constructor(settingModel: Model<SettingDocument>);
    create(createSettingDto: CreateSettingInput): Promise<SettingDocument>;
    findAll(category?: SettingCategory): Promise<SettingDocument[]>;
    findByKey(key: string): Promise<SettingDocument>;
    findPublicSettings(): Promise<SettingDocument[]>;
    getAllAsObject(): Promise<Record<string, any>>;
    update(key: string, updateSettingDto: UpdateSettingInput): Promise<SettingDocument>;
    bulkUpdate(updates: Array<{
        key: string;
        value: any;
    }>): Promise<{
        updated: number;
    }>;
    delete(key: string): Promise<void>;
    initializeDefaults(): Promise<void>;
}
