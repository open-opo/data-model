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
exports.CBCBase = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var baseModel_1 = require("./baseModel");
var referral_1 = require("./referral");
/**
 * Represents a Complete Blood Count
 *
 * There will be a CBC for each draw, so a referral will have multiple CBCs
 */
var CBCBase = /** @class */ (function (_super) {
    __extends(CBCBase, _super);
    /**
     * @class
     * @ignore
     */
    function CBCBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        __metadata("design:type", String)
    ], CBCBase.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return referral_1.ReferralBase; }, function (referral) { return referral.cbcs; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", referral_1.ReferralBase)
    ], CBCBase.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "wbc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "rbc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "hgb", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "hct", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "platelets", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "segs", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "lymphs", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "bands", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "mono", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "decimal", default: null }),
        (0, class_validator_1.MaxLength)(5),
        (0, class_validator_1.IsDecimal)({ decimal_digits: "2" }),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "eos", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid", name: "unos_record_id", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], CBCBase.prototype, "unosRecordId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp" }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Date)
    ], CBCBase.prototype, "datetime", void 0);
    CBCBase = __decorate([
        (0, typeorm_1.Entity)({ name: "cbc" }),
        __metadata("design:paramtypes", [])
    ], CBCBase);
    return CBCBase;
}(baseModel_1.BaseModel));
exports.CBCBase = CBCBase;
