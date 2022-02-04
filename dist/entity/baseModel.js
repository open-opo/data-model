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
exports.BaseModel = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    /**
     * @class
     * @ignore
     */
    function BaseModel() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], BaseModel.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamp" }),
        __metadata("design:type", Date)
    ], BaseModel.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: "updated_at", type: "timestamp" }),
        __metadata("design:type", Object)
    ], BaseModel.prototype, "updatedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "createdby_id", type: "uuid", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], BaseModel.prototype, "createdById", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "updatedby_id", type: "uuid", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], BaseModel.prototype, "updatedById", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "foreign_guid", type: "uuid", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], BaseModel.prototype, "foreignGuid", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "foreign_id", type: "int", default: null }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], BaseModel.prototype, "foreignId", void 0);
    return BaseModel;
}(typeorm_1.BaseEntity));
exports.BaseModel = BaseModel;
