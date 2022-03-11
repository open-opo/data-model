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
exports.OrganizationBase = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var opocdmEnums_1 = require("../enum/opocdmEnums");
var baseModel_1 = require("./baseModel");
var organizationUnit_1 = require("./organizationUnit");
var referral_1 = require("./referral");
/**
 * Organization
 */
var OrganizationBase = /** @class */ (function (_super) {
    __extends(OrganizationBase, _super);
    /**
     * @class
     * @ignore
     */
    function OrganizationBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ name: "official_name", type: "varchar", length: 100 }),
        (0, class_validator_1.MaxLength)(100),
        __metadata("design:type", String)
    ], OrganizationBase.prototype, "officialName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "short_name", type: "varchar", length: 25, default: null }),
        (0, class_validator_1.MaxLength)(25),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "shortName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "policies_and_procedures",
            type: "varchar",
            length: 5000,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(5000),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "policiesAndProcedures", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "bed_count", type: "int", default: null }),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "bedCount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 4, default: null }),
        (0, class_validator_1.MaxLength)(4),
        (0, class_validator_1.IsAlpha)(),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "address_1", type: "varchar", length: 50, default: null }),
        (0, class_validator_1.MaxLength)(50),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "address1", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "address_2", type: "varchar", length: 50, default: null }),
        (0, class_validator_1.MaxLength)(50),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "address2", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 50, default: null }),
        (0, class_validator_1.MaxLength)(50),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "state", enum: opocdmEnums_1.State, type: "enum", default: null }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.State),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "state", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 50, default: null }),
        (0, class_validator_1.MaxLength)(50),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "county", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "postal_code", type: "varchar", length: 15, default: null }),
        (0, class_validator_1.MaxLength)(15),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "postalCode", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "timezone", enum: opocdmEnums_1.TimeZone, type: "enum", default: null }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.TimeZone),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "timezone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 15, default: null }),
        (0, class_validator_1.MaxLength)(15),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "npi", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 15, default: null }),
        (0, class_validator_1.MaxLength)(15),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "cmsId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 15, default: null }),
        (0, class_validator_1.MaxLength)(15),
        (0, class_validator_1.IsPhoneNumber)(),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 15, default: null }),
        (0, class_validator_1.MaxLength)(15),
        (0, class_validator_1.IsPhoneNumber)(),
        __metadata("design:type", Object)
    ], OrganizationBase.prototype, "fax", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return referral_1.ReferralBase; }, function (x) { return x.referringOrganization; }),
        __metadata("design:type", Array)
    ], OrganizationBase.prototype, "referrals", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return organizationUnit_1.OrganizationUnitBase; }, function (x) { return x.organization; }),
        __metadata("design:type", Array)
    ], OrganizationBase.prototype, "units", void 0);
    OrganizationBase = __decorate([
        (0, typeorm_1.Entity)({ name: "organization" }),
        __metadata("design:paramtypes", [])
    ], OrganizationBase);
    return OrganizationBase;
}(baseModel_1.BaseModel));
exports.OrganizationBase = OrganizationBase;
