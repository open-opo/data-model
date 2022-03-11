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
exports.LabResultBase = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var baseModel_1 = require("./baseModel");
var referral_1 = require("./referral");
/**
 * Represents a Lab Result
 *
 * There will be a Lab Result for each draw, so a referral will have multiple Labs
 */
var LabResultBase = /** @class */ (function (_super) {
    __extends(LabResultBase, _super);
    /**
     * @class
     * @ignore
     */
    function LabResultBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        __metadata("design:type", String)
    ], LabResultBase.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return referral_1.ReferralBase; }, function (referral) { return referral.labResults; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", referral_1.ReferralBase)
    ], LabResultBase.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "na", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(2),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "k", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ci", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "co2", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "bun", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "creatinine", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "creatinine_clearance" }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "creatinineClearance", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "glucose", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "calcium", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "ionized_calcium" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ionizedCalcium", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "mg", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        (0, class_validator_1.MaxLength)(3),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "1" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "phosphorus", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "lactate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "total_bilirubin" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "totalBilirubin", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "direct_bilirubin" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "directBilirubin", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "indirect_bilirubin" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "indirectBilirubin", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ast", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "alt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "alp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ggt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "albumin", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "totalProtein", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ldh", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "pt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "inr", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ptt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "ckmb", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "cpk", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "cpk_index" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "cpkIndex", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "total_mb" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "totalMB", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "troponin_i" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "troponinI", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "troponin-t" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "troponinT", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "amylase", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "lipase", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "lipase_uln" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "lipaseULN", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "a1c", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "bnp", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", name: "serum_osolality" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "serumOsmolality", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "serum_beta_hcg", type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "serumBetaHCG", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal" }),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "fibrinogen", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid", name: "unos_record_id" }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], LabResultBase.prototype, "unosRecordId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp" }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Date)
    ], LabResultBase.prototype, "datetime", void 0);
    LabResultBase = __decorate([
        (0, typeorm_1.Entity)({ name: "lab_result" }),
        __metadata("design:paramtypes", [])
    ], LabResultBase);
    return LabResultBase;
}(baseModel_1.BaseModel));
exports.LabResultBase = LabResultBase;
