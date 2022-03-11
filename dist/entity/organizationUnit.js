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
exports.OrganizationUnitBase = exports.UnitType = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var baseModel_1 = require("./baseModel");
var organization_1 = require("./organization");
var UnitType;
(function (UnitType) {
})(UnitType = exports.UnitType || (exports.UnitType = {}));
/**
 * Organization Unit
 */
var OrganizationUnitBase = /** @class */ (function (_super) {
    __extends(OrganizationUnitBase, _super);
    /**
     * @class
     * @ignore
     */
    function OrganizationUnitBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
        (0, class_validator_1.MaxLength)(100),
        __metadata("design:type", String)
    ], OrganizationUnitBase.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "unit_type", type: "enum", enum: UnitType }),
        (0, class_validator_1.IsEnum)(UnitType),
        __metadata("design:type", Number)
    ], OrganizationUnitBase.prototype, "unitType", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "bed_count", type: "int", default: null }),
        (0, class_validator_1.Min)(1),
        __metadata("design:type", Object)
    ], OrganizationUnitBase.prototype, "bedCount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "uuid", default: null, name: "organization_id" }),
        __metadata("design:type", Object)
    ], OrganizationUnitBase.prototype, "organizationId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return organization_1.OrganizationBase; }, function (x) { return x.units; }),
        (0, typeorm_1.JoinColumn)({ name: "organization_id" }),
        __metadata("design:type", organization_1.OrganizationBase)
    ], OrganizationUnitBase.prototype, "organization", void 0);
    OrganizationUnitBase = __decorate([
        (0, typeorm_1.Entity)({ name: "organization_unit" }),
        __metadata("design:paramtypes", [])
    ], OrganizationUnitBase);
    return OrganizationUnitBase;
}(baseModel_1.BaseModel));
exports.OrganizationUnitBase = OrganizationUnitBase;
