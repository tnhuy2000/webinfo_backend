import { SettingsService } from './settings.service';
export declare class SettingsResolver {
    private readonly settingsService;
    constructor(settingsService: SettingsService);
    getSettings(category?: string): Promise<import("./schemas/setting.schema").SettingDocument[]>;
    getSetting(key: string): Promise<import("./schemas/setting.schema").SettingDocument>;
    getPublicSettings(): Promise<import("./schemas/setting.schema").SettingDocument[]>;
    getAllSettingsAsObject(): Promise<Record<string, any>>;
    createSetting(input: any): Promise<import("./schemas/setting.schema").SettingDocument>;
    updateSetting(key: string, input: any): Promise<import("./schemas/setting.schema").SettingDocument>;
    bulkUpdateSettings(settings: any[]): Promise<number>;
    deleteSetting(key: string): Promise<boolean>;
    initializeDefaultSettings(): Promise<boolean>;
}
