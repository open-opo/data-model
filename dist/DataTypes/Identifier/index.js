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
exports.Identifier = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var enums_1 = require("./enums");
var BaseTable_1 = require("../../BaseTable");
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
var Identifier = /** @class */ (function (_super) {
    __extends(Identifier, _super);
    function Identifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({
            name: "use",
            type: "enum",
            enum: enums_1.IdentifierUse,
        }),
        (0, class_validator_1.IsEnum)(enums_1.IdentifierUse),
        __metadata("design:type", String)
    ], Identifier.prototype, "use", void 0);
    Identifier = __decorate([
        (0, typeorm_1.Entity)({ name: "identifier" })
    ], Identifier);
    return Identifier;
}(BaseTable_1.BaseTable));
exports.Identifier = Identifier;
