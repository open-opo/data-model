"use strict";
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
exports.ContactPoint = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var enums_1 = require("./enums");
/**
 * **Definition**: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 *
 * **Cardinality**:	0..*
 *
 * **Type**:	Element
 *
 * **Requirements**: Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *
 * https://hl7.org/fhir/datatypes.html#Identifier
 */
var ContactPoint = /** @class */ (function () {
    function ContactPoint() {
    }
    __decorate([
        (0, typeorm_1.Column)({
            name: "system",
            type: "enum",
            enum: enums_1.ContactPointSystem,
        }),
        (0, class_validator_1.IsEnum)(enums_1.ContactPointSystem),
        __metadata("design:type", String)
    ], ContactPoint.prototype, "system", void 0);
    ContactPoint = __decorate([
        (0, typeorm_1.Entity)({ name: "contact_point" })
    ], ContactPoint);
    return ContactPoint;
}());
exports.ContactPoint = ContactPoint;
