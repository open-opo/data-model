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
exports.Organization = exports.OrganizationIdentifier = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var BaseTable_1 = require("../../BaseTable");
var DataTypes_1 = require("../../DataTypes");
// import { State, TimeZone } from "../../opocdmEnums";
var OrganizationIdentifier = /** @class */ (function (_super) {
    __extends(OrganizationIdentifier, _super);
    function OrganizationIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Organization; }, function (organization) { return organization.organizationIdentifiers; }),
        __metadata("design:type", Organization)
    ], OrganizationIdentifier.prototype, "organization", void 0);
    OrganizationIdentifier = __decorate([
        (0, typeorm_1.Entity)()
    ], OrganizationIdentifier);
    return OrganizationIdentifier;
}(DataTypes_1.Identifier));
exports.OrganizationIdentifier = OrganizationIdentifier;
/**
 * **Definition**: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 *
 * **Cardinality**:	0..*
 *
 * **Type**: [DomainResource](https://hl7.org/fhir/domainresource.html)
 *
 * **Requirements**: Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
 *
 * **Invariants**: **Defined on this element**
 *   __org-1__	__Rule__ - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`
 *
 * https://hl7.org/fhir/organization.html
 */
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return OrganizationIdentifier; }, function (organizationIdentifier) { return organizationIdentifier.organization; }),
        __metadata("design:type", Array)
    ], Organization.prototype, "organizationIdentifiers", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, typeorm_1.Column)({ name: "active", type: "boolean" }),
        __metadata("design:type", Boolean)
    ], Organization.prototype, "active", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, typeorm_1.Column)({ name: "name", type: "string", length: 64 }),
        __metadata("design:type", String)
    ], Organization.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, typeorm_1.Column)({ name: "name", type: "string", length: 64 }),
        __metadata("design:type", String)
    ], Organization.prototype, "alias", void 0);
    Organization = __decorate([
        (0, typeorm_1.Entity)({ name: "organization" })
    ], Organization);
    return Organization;
}(BaseTable_1.BaseTable));
exports.Organization = Organization;
