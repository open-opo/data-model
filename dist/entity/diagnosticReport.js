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
exports.DiagnosticReport = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var observation_1 = require("./observation");
var referral_1 = require("./referral");
/**
 * DiagnosticReport
 */
var DiagnosticReport = /** @class */ (function (_super) {
    __extends(DiagnosticReport, _super);
    function DiagnosticReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], DiagnosticReport.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamp" }),
        __metadata("design:type", Date)
    ], DiagnosticReport.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "uuid", name: "referral_id" }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", String)
    ], DiagnosticReport.prototype, "referralId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return referral_1.ReferralBase; }, function (referral) { return referral.diagnosticReports; }),
        (0, typeorm_1.JoinColumn)({ name: "referral_id" }),
        __metadata("design:type", referral_1.ReferralBase)
    ], DiagnosticReport.prototype, "referral", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "json" }),
        __metadata("design:type", Object)
    ], DiagnosticReport.prototype, "resource", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return observation_1.Observation; }, function (x) { return x.diagnosticReport; }),
        __metadata("design:type", Array)
    ], DiagnosticReport.prototype, "observations", void 0);
    DiagnosticReport = __decorate([
        (0, typeorm_1.Entity)({ name: "diagnostic_report" })
    ], DiagnosticReport);
    return DiagnosticReport;
}(typeorm_1.BaseEntity));
exports.DiagnosticReport = DiagnosticReport;
