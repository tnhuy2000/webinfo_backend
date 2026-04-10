"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingSchema = exports.Setting = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
const graphql_schema_1 = require("../../../graphql.schema");
let Setting = class Setting {
    key;
    value;
    category;
    description;
    type;
    isPublic;
    isDefault;
};
exports.Setting = Setting;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Setting.prototype, "key", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object, required: true }),
    __metadata("design:type", Object)
], Setting.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: graphql_schema_1.SettingCategory, default: graphql_schema_1.SettingCategory.GENERAL }),
    __metadata("design:type", String)
], Setting.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Setting.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'text' }),
    __metadata("design:type", String)
], Setting.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Setting.prototype, "isPublic", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Setting.prototype, "isDefault", void 0);
exports.Setting = Setting = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.SETTINGS,
    })
], Setting);
exports.SettingSchema = mongoose_1.SchemaFactory.createForClass(Setting);
//# sourceMappingURL=setting.schema.js.map