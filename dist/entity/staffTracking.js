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
exports.StaffTrackingBase = exports.StaffRole = exports.StaffType = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var baseModel_1 = require("./baseModel");
var referral_1 = require("./referral");
/**
 * What Type of Staff is Onsite
 *
 * [ToDo] We need help making this list
 */
var StaffType;
(function (StaffType) {
})(StaffType = exports.StaffType || (exports.StaffType = {}));
/**
 * What is the Staffing doing OnSite
 *
 * [ToDo] We need help making this list
 */
var StaffRole;
(function (StaffRole) {
})(StaffRole = exports.StaffRole || (exports.StaffRole = {}));
/**
 * Staff Tracking
 *
 * Use this to figure out what staff are on a referral
 */
var StaffTrackingBase = /** @class */ (function (_super) {
    __extends(StaffTrackingBase, _super);
    /**
     * @class
     * @ignore
     */
    function StaffTrackingBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        __metadata("design:type", String)
    ], StaffTrackingBase.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return referral_1.ReferralBase; }, function (x) { return x.staffTrackings; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", referral_1.ReferralBase)
    ], StaffTrackingBase.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "staff_type", enum: StaffType, type: "enum" }),
        (0, class_validator_1.IsEnum)(StaffType),
        __metadata("design:type", Number)
    ], StaffTrackingBase.prototype, "staffType", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: StaffRole, type: "enum" }),
        (0, class_validator_1.IsEnum)(StaffRole),
        __metadata("design:type", Number)
    ], StaffTrackingBase.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Number)
    ], StaffTrackingBase.prototype, "time", void 0);
    StaffTrackingBase = __decorate([
        (0, typeorm_1.Entity)({ name: "staff_tracking" }),
        __metadata("design:paramtypes", [])
    ], StaffTrackingBase);
    return StaffTrackingBase;
}(baseModel_1.BaseModel));
exports.StaffTrackingBase = StaffTrackingBase;
