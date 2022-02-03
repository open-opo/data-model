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
exports.ABGBase = exports.Mode = void 0;
/* eslint-disable no-unused-vars */
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var baseModel_1 = require("./baseModel");
var referral_1 = require("./referral");
/**
 * The Mode
 */
var Mode;
(function (Mode) {
    Mode["NC"] = "NC";
    Mode["HFOV"] = "HFOV";
    Mode["APRV"] = "APRV";
    Mode["CMV"] = "CMV";
    Mode["Other"] = "Other";
    Mode["PC"] = "PC";
    Mode["CPAP"] = "CPAP";
    Mode["SIMV"] = "SIMV";
    Mode["PRVC"] = "PRVC";
    Mode["BiPAP"] = "BiPAP";
    Mode["AC"] = "AC";
    Mode["ApneaTest"] = "ApneaTest";
})(Mode = exports.Mode || (exports.Mode = {}));
/**
 * Represents an Arterial Blood Gas
 *
 * There will be a Arterial Blood Gas for each draw, so a referral will have multiple ABGs
 */
var ABGBase = /** @class */ (function (_super) {
    __extends(ABGBase, _super);
    /**
     * @class
     * @ignore
     */
    function ABGBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", String)
    ], ABGBase.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return referral_1.ReferralBase; }, function (referral) { return referral.abgs; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", referral_1.ReferralBase)
    ], ABGBase.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "ph", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "pco2", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "pc03", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "be", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "hco3", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "o2sat", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        (0, class_validator_1.MaxLength)(3),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "fio2", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", name: "respiration_rate", default: null }),
        (0, class_validator_1.MaxLength)(3),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "respirationRate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "tv", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "peep", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", default: null }),
        (0, class_validator_1.MaxLength)(3),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "pip", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "enum", enum: Mode, default: null }),
        (0, class_validator_1.IsEnum)(Mode),
        __metadata("design:type", Object)
    ], ABGBase.prototype, "mode", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid", name: "unos_record_id", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", String)
    ], ABGBase.prototype, "unosRecordId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp" }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Date)
    ], ABGBase.prototype, "datetime", void 0);
    ABGBase = __decorate([
        (0, typeorm_1.Entity)({ name: "abg" }),
        __metadata("design:paramtypes", [])
    ], ABGBase);
    return ABGBase;
}(baseModel_1.BaseModel));
exports.ABGBase = ABGBase;
