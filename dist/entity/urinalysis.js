"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.UrinalysisBase = exports.Urinalysis_Leukocyte = exports.Urinalysis_Bacteria = exports.Urinalysis_Blood = exports.Urinalysis_Appearance = exports.Urinalysis_Color = void 0;
/* eslint-disable no-unused-vars */
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var __1 = require("..");
var baseModel_1 = require("./baseModel");
var Urinalysis_Color;
(function (Urinalysis_Color) {
    Urinalysis_Color["Colorless"] = "Colorless";
    Urinalysis_Color["Straw"] = "Straw";
    Urinalysis_Color["Clear"] = "Clear";
    Urinalysis_Color["LightYellow"] = "Light Yellow";
    Urinalysis_Color["Yellow"] = "Yellow";
    Urinalysis_Color["DarkYellow"] = "Dark Yellow ";
    Urinalysis_Color["Amber"] = "Amber";
    Urinalysis_Color["LightOrange"] = "Light Orange";
    Urinalysis_Color["Orange"] = "Orange";
    Urinalysis_Color["DarkOrange"] = "Dark Orange";
    Urinalysis_Color["LightRed"] = "Light Red";
    Urinalysis_Color["Red"] = "Red";
    Urinalysis_Color["DarkRed"] = "Dark Red";
    Urinalysis_Color["LightBrown"] = "Light Brown";
    Urinalysis_Color["Brown"] = "Brown";
    Urinalysis_Color["DarkBrown"] = "Dark Brown";
    Urinalysis_Color["Pink"] = "Pink";
})(Urinalysis_Color = exports.Urinalysis_Color || (exports.Urinalysis_Color = {}));
var Urinalysis_Appearance;
(function (Urinalysis_Appearance) {
    Urinalysis_Appearance["Clear"] = "Clear";
    Urinalysis_Appearance["SlightlyCloudy"] = "Slightly Cloudy";
    Urinalysis_Appearance["Cloudy"] = "Cloudy";
    Urinalysis_Appearance["SlightlyHazy"] = "Slightly Hazy";
    Urinalysis_Appearance["Hazy"] = "Hazy";
    Urinalysis_Appearance["LightTurbid"] = "Light Turbid";
    Urinalysis_Appearance["Turbid"] = "Turbid";
})(Urinalysis_Appearance = exports.Urinalysis_Appearance || (exports.Urinalysis_Appearance = {}));
var Urinalysis_Blood;
(function (Urinalysis_Blood) {
    Urinalysis_Blood["Large"] = "Large";
    Urinalysis_Blood["Moderate"] = "Moderate";
    Urinalysis_Blood["Small"] = "Small";
    Urinalysis_Blood["Trace"] = "Trace";
})(Urinalysis_Blood = exports.Urinalysis_Blood || (exports.Urinalysis_Blood = {}));
var Urinalysis_Bacteria;
(function (Urinalysis_Bacteria) {
    Urinalysis_Bacteria["None"] = "None";
    Urinalysis_Bacteria["Light"] = "Light";
    Urinalysis_Bacteria["Moderate"] = "Moderate";
    Urinalysis_Bacteria["Heavy"] = "Heavy";
})(Urinalysis_Bacteria = exports.Urinalysis_Bacteria || (exports.Urinalysis_Bacteria = {}));
var Urinalysis_Leukocyte;
(function (Urinalysis_Leukocyte) {
    Urinalysis_Leukocyte["Trace"] = "Trace";
    Urinalysis_Leukocyte["Small"] = "Small";
    Urinalysis_Leukocyte["Moderate"] = "Moderate";
    Urinalysis_Leukocyte["Large"] = "Large";
})(Urinalysis_Leukocyte = exports.Urinalysis_Leukocyte || (exports.Urinalysis_Leukocyte = {}));
/**
 * Urinalysis
 */
var UrinalysisBase = /** @class */ (function (_super) {
    __extends(UrinalysisBase, _super);
    /**
     * @class
     * @ignore
     */
    function UrinalysisBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        __metadata("design:type", String)
    ], UrinalysisBase.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return __1.ReferralBase; }, function (x) { return x.urinalyses; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", __1.ReferralBase)
    ], UrinalysisBase.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Urinalysis_Color, type: "enum" }),
        (0, class_validator_1.IsEnum)(Urinalysis_Color),
        __metadata("design:type", String)
    ], UrinalysisBase.prototype, "color", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Urinalysis_Appearance, type: "enum" }),
        (0, class_validator_1.IsEnum)(Urinalysis_Appearance),
        __metadata("design:type", String)
    ], UrinalysisBase.prototype, "appearance", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(2),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "ph", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "specific_gravity" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "3" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "specificGravity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "protein", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "glucose", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Urinalysis_Blood, type: "enum" }),
        (0, class_validator_1.IsEnum)(Urinalysis_Blood),
        __metadata("design:type", String)
    ], UrinalysisBase.prototype, "blood", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "rbc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "wbc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "ketones", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "casts", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Urinalysis_Bacteria, type: "enum" }),
        (0, class_validator_1.IsEnum)(Urinalysis_Bacteria),
        __metadata("design:type", String)
    ], UrinalysisBase.prototype, "bacteria", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "epith", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Urinalysis_Leukocyte, type: "enum" }),
        (0, class_validator_1.IsEnum)(Urinalysis_Leukocyte),
        __metadata("design:type", String)
    ], UrinalysisBase.prototype, "leukocyte", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "3" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "acr", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "urobilinogen", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "bilirubin", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid", name: "unos_record_id" }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], UrinalysisBase.prototype, "unosRecordId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp" }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Date)
    ], UrinalysisBase.prototype, "datetime", void 0);
    UrinalysisBase = __decorate([
        (0, typeorm_1.Entity)({ name: "urinalysis" }),
        __metadata("design:paramtypes", [])
    ], UrinalysisBase);
    return UrinalysisBase;
}(baseModel_1.BaseModel));
exports.UrinalysisBase = UrinalysisBase;
