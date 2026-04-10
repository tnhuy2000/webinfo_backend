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
exports.NavigationSchema = exports.Navigation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constant_1 = require("../../../constant");
let Navigation = class Navigation {
    label;
    href;
    order;
    isActive;
};
exports.Navigation = Navigation;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Navigation.prototype, "label", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Navigation.prototype, "href", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Navigation.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], Navigation.prototype, "isActive", void 0);
exports.Navigation = Navigation = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        collection: constant_1.DATABASE_COLLECTION_NAME.NAVIGATIONS,
    })
], Navigation);
exports.NavigationSchema = mongoose_1.SchemaFactory.createForClass(Navigation);
//# sourceMappingURL=navigation.schema.js.map