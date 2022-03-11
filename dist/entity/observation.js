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
exports.Observation = void 0;
/* eslint-disable no-unused-vars */
var typeorm_1 = require("typeorm");
var diagnosticReport_1 = require("./diagnosticReport");
/**
 * Culture
 */
var Observation = /** @class */ (function (_super) {
    __extends(Observation, _super);
    function Observation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], Observation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamp" }),
        __metadata("design:type", Date)
    ], Observation.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return diagnosticReport_1.DiagnosticReport; }, function (referral) { return referral.observations; }),
        (0, typeorm_1.JoinColumn)({ name: "diagnostic_id" }),
        __metadata("design:type", diagnosticReport_1.DiagnosticReport)
    ], Observation.prototype, "diagnosticReport", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "json" }),
        __metadata("design:type", Object)
    ], Observation.prototype, "resource", void 0);
    Observation = __decorate([
        (0, typeorm_1.Entity)({ name: "observation" })
    ], Observation);
    return Observation;
}(typeorm_1.BaseEntity));
exports.Observation = Observation;
