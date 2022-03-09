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
exports.CultureBase = exports.Result = exports.Source = void 0;
/* eslint-disable no-unused-vars */
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var baseModel_1 = require("./baseModel");
var referral_1 = require("./referral");
var Source;
(function (Source) {
})(Source = exports.Source || (exports.Source = {}));
var Result;
(function (Result) {
    Result["Positive"] = "Positive";
    Result["Negative"] = "Negative";
    Result["Inconclusive"] = "Inconclusive";
})(Result = exports.Result || (exports.Result = {}));
/**
 * Culture
 */
var CultureBase = /** @class */ (function (_super) {
    __extends(CultureBase, _super);
    /**
     * @class
     * @ignore
     */
    function CultureBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", String)
    ], CultureBase.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return referral_1.ReferralBase; }, function (referral) { return referral.cultures; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", referral_1.ReferralBase)
    ], CultureBase.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Source, type: "enum", default: null }),
        (0, class_validator_1.IsEnum)(Source),
        __metadata("design:type", Number)
    ], CultureBase.prototype, "source", void 0);
    __decorate([
        (0, typeorm_1.Column)({ enum: Result, type: "enum", default: null }),
        (0, class_validator_1.IsEnum)(Result),
        __metadata("design:type", Object)
    ], CultureBase.prototype, "result", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", name: "result_at_24", length: 255, default: null }),
        (0, class_validator_1.MaxLength)(255),
        __metadata("design:type", Object)
    ], CultureBase.prototype, "resultAt24", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", name: "result_at_48", length: 255, default: null }),
        (0, class_validator_1.MaxLength)(255),
        __metadata("design:type", Object)
    ], CultureBase.prototype, "resultAt48", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "varchar",
            name: "result_at_final",
            length: 3000,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(255),
        __metadata("design:type", Object)
    ], CultureBase.prototype, "resultAtFinal", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid", name: "unos_record_id", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], CultureBase.prototype, "unosRecordId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "timestamp" }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Date)
    ], CultureBase.prototype, "datetime", void 0);
    CultureBase = __decorate([
        (0, typeorm_1.Entity)({ name: "culture" }),
        __metadata("design:paramtypes", [])
    ], CultureBase);
    return CultureBase;
}(baseModel_1.BaseModel));
exports.CultureBase = CultureBase;
