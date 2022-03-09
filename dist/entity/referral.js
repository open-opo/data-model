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
exports.ReferralBase = exports.ReferralSource = exports.ReferralType = exports.CauseOfDeath = exports.FamilyStatus = exports.TissueStatus = exports.OrganStatus = void 0;
/* eslint-disable no-unused-vars */
var baseModel_1 = require("./baseModel");
var opocdmEnums_1 = require("../enum/opocdmEnums");
var unosEnums_1 = require("../enum/unosEnums");
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var abg_1 = require("./abg");
var cbc_1 = require("./cbc");
var culture_1 = require("./culture");
var labResult_1 = require("./labResult");
var organization_1 = require("./organization");
var staffTracking_1 = require("./staffTracking");
var urinalysis_1 = require("./urinalysis");
var organizationUnit_1 = require("./organizationUnit");
/**
 * The current organ status for a case
 */
var OrganStatus;
(function (OrganStatus) {
})(OrganStatus = exports.OrganStatus || (exports.OrganStatus = {}));
/**
 * The current tissue status for a case
 */
var TissueStatus;
(function (TissueStatus) {
})(TissueStatus = exports.TissueStatus || (exports.TissueStatus = {}));
/**
 * The current family status for a case
 */
var FamilyStatus;
(function (FamilyStatus) {
})(FamilyStatus = exports.FamilyStatus || (exports.FamilyStatus = {}));
/**
 * Cause of Death (COD)
 *
 * [ToDo: Description]
 */
var CauseOfDeath;
(function (CauseOfDeath) {
    CauseOfDeath["AAA"] = "AAA";
    CauseOfDeath["Exsanguination"] = "Exsanguination";
    CauseOfDeath["FetalDemise"] = "Fetal Demise";
    CauseOfDeath["GSW"] = "GSW";
    CauseOfDeath["Hepatitis"] = "Hepatitis";
    CauseOfDeath["HIV"] = "HIV";
    CauseOfDeath["ICBICH"] = "ICB/ICH";
    CauseOfDeath["InfectiousDisease_Viral"] = "Infectious Disease Viral";
    CauseOfDeath["InfectiousDisease_Bacterial"] = "Infectious Disease Bacterial";
    CauseOfDeath["InfectiousDisease_Other"] = "Infectious Disease Other";
    CauseOfDeath["LeukemiaLymphoma"] = "Leukemia/Lymphoma";
    CauseOfDeath["Arrhythmia"] = "Arrhythmia";
    CauseOfDeath["MultisystemFailure"] = "Multi-system Failure";
    CauseOfDeath["MyocardialInfarction"] = "Myocardial Infarction";
    CauseOfDeath["Overdose"] = "Overdose";
    CauseOfDeath["Pneumonia"] = "Pneumonia";
    CauseOfDeath["PulmonaryEmbolism"] = "Pulmonary Embolism";
    CauseOfDeath["Respiratory"] = "Respiratory";
    CauseOfDeath["Sepsis"] = "Sepsis";
    CauseOfDeath["SAH"] = "SAH";
    CauseOfDeath["SuddenInfantDeathSyndrome"] = "Sudden Infant Death Syndrome";
    CauseOfDeath["Cancer"] = "Cancer";
    CauseOfDeath["Trauma"] = "Trauma";
    CauseOfDeath["Prematurity"] = "Prematurity";
    CauseOfDeath["Cardiac"] = "Cardiac";
    CauseOfDeath["CHF"] = "CHF";
    CauseOfDeath["COPD"] = "COPD";
    CauseOfDeath["Drowning"] = "Drowning";
    CauseOfDeath["ESLD"] = "ESLD";
    CauseOfDeath["ESRD"] = "ESRD";
    CauseOfDeath["Other"] = "Other";
})(CauseOfDeath = exports.CauseOfDeath || (exports.CauseOfDeath = {}));
var ReferralType;
(function (ReferralType) {
    ReferralType["OrganTissueEye"] = "Organ Tissue Eye";
    ReferralType["OrganTissue"] = "Organ Tissue";
    ReferralType["OrganEye"] = "Organ Eye";
    ReferralType["Organ"] = "Organ";
    ReferralType["TissueEye"] = "Tissue Eye";
    ReferralType["Tissue"] = "Tissue";
    ReferralType["Eye"] = "Eye";
    ReferralType["RuleOut"] = "Rule Out";
})(ReferralType = exports.ReferralType || (exports.ReferralType = {}));
var ReferralSource;
(function (ReferralSource) {
})(ReferralSource = exports.ReferralSource || (exports.ReferralSource = {}));
/**
 * Represents a Referral
 *
 * [ToDo: Description]
 */
var ReferralBase = /** @class */ (function (_super) {
    __extends(ReferralBase, _super);
    /**
     * @class
     * @ignore
     */
    function ReferralBase() {
        return _super.call(this) || this;
    }
    __decorate([
        (0, typeorm_1.Column)({ name: "patient_firstname", type: "varchar", length: 50 }),
        (0, class_validator_1.MaxLength)(50),
        __metadata("design:type", String)
    ], ReferralBase.prototype, "patientFirstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "patient_lastname", type: "varchar", length: 50 }),
        (0, class_validator_1.MaxLength)(50),
        __metadata("design:type", String)
    ], ReferralBase.prototype, "patientLastName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "patient_middlename",
            type: "varchar",
            length: 25,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(25),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "patientMiddleName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "patient_nickname",
            type: "varchar",
            length: 25,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(25),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "patientNickName", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "race", enum: opocdmEnums_1.Race, type: "enum" }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.Race),
        __metadata("design:type", String)
    ], ReferralBase.prototype, "race", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "sex", default: opocdmEnums_1.Sex.Unknown, enum: opocdmEnums_1.Sex, type: "enum" }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.Sex),
        __metadata("design:type", String)
    ], ReferralBase.prototype, "sex", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "initial_weight", type: "decimal", default: null }),
        (0, class_validator_1.IsDecimal)(),
        (0, class_validator_1.MaxLength)(5),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "initialWeight", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "inital_height", type: "int", default: null }),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "initialHeight", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "is_referred_on_vent", default: false, type: "boolean" }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], ReferralBase.prototype, "isReferredOnVent", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "was_onvent", type: "boolean", default: null }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "wasOnVent", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "unos_donor_id", type: "varchar", length: 20, default: null }),
        (0, class_validator_1.MaxLength)(20),
        (0, class_validator_1.IsAlphanumeric)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "unosDonorId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "referring_organization_id", type: "uuid", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referringOrganizationId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return organization_1.OrganizationBase; }, function (x) { return x.referrals; }),
        (0, typeorm_1.JoinColumn)({ name: "referring_organization_id" }),
        __metadata("design:type", organization_1.OrganizationBase)
    ], ReferralBase.prototype, "referringOrganization", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "referred_at", type: "timestamp" }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Date)
    ], ReferralBase.prototype, "referredAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "admitted_at", type: "timestamp", default: null }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "admittedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "clinical_triggers_met_at",
            type: "timestamp",
            default: null,
        }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "clinicalTriggersMetAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "cardiac_death_at", type: "timestamp", default: null }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "cardiacdeathAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "braindeath1_at", type: "timestamp", default: null }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "braindeath1At", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "braindeath2_at", type: "timestamp", default: null }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "braindeath2At", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "extubated_at", type: "timestamp", default: null }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "extubatedAt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "case_number", type: "varchar", length: 15 }),
        (0, class_validator_1.MaxLength)(15),
        __metadata("design:type", String)
    ], ReferralBase.prototype, "caseNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "unos_record_id", type: "uuid", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "unosRecordId", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "unit_id", type: "uuid", default: null }),
        (0, class_validator_1.IsUUID)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "unitId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return organizationUnit_1.OrganizationUnitBase; }, function (x) { return x.referrals; }),
        (0, typeorm_1.JoinColumn)({ name: "unit_id" }),
        __metadata("design:type", organizationUnit_1.OrganizationUnitBase)
    ], ReferralBase.prototype, "unit", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "room", type: "varchar", length: 100, default: null }),
        (0, class_validator_1.MaxLength)(100),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "room", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "referrer_firstname",
            type: "varchar",
            length: 50,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(50),
        (0, class_validator_1.IsAlpha)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referrerFirstName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "referrer_lastname",
            type: "varchar",
            length: 50,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(50),
        (0, class_validator_1.IsAlpha)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referrerLastName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "referrer_credentials",
            enum: opocdmEnums_1.Credentials,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.Credentials),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referrerCredentials", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "referrer_phone",
            type: "varchar",
            length: 15,
            default: null,
        }),
        (0, class_validator_1.IsPhoneNumber)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referrerPhone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "referrer_phone_ext",
            type: "varchar",
            length: 5,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(5),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referrerPhoneExt", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "birthdate", type: "date", default: null }),
        (0, class_validator_1.IsDate)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "birthDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "cod_opo", enum: CauseOfDeath, type: "enum", default: null }),
        (0, class_validator_1.IsEnum)(CauseOfDeath),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "codOPO", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "cod_unos",
            enum: unosEnums_1.CauseOfDeath,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(unosEnums_1.CauseOfDeath),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "codUNOS", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "is_dcd_criteria_met", type: "boolean", default: null }),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "isDCDCriteriaMet", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "registry_status",
            enum: opocdmEnums_1.RegistryStatus,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.RegistryStatus),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "registryStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "registry_source",
            enum: opocdmEnums_1.RegistrySource,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.RegistrySource),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "registrySource", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "organ_status",
            enum: OrganStatus,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(OrganStatus),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "organStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "tissue_status",
            enum: TissueStatus,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(TissueStatus),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "tissueStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "family_status",
            enum: FamilyStatus,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(FamilyStatus),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "familyStatus", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "referral_type",
            enum: ReferralType,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(ReferralType),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "referralType", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "mrn", type: "varchar", length: 20, default: null }),
        (0, class_validator_1.IsAlphanumeric)(),
        (0, class_validator_1.MaxLength)(20),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "mrn", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "is_referral_complete", type: "boolean" }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], ReferralBase.prototype, "isReferralComplete", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "referral_source", enum: ReferralSource, type: "enum" }),
        (0, class_validator_1.IsEnum)(ReferralSource),
        __metadata("design:type", Number)
    ], ReferralBase.prototype, "referralSource", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "external_reference_number",
            type: "varchar",
            length: 36,
            default: null,
        }),
        (0, class_validator_1.IsAlphanumeric)(),
        (0, class_validator_1.MaxLength)(36),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "externalReferenceNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "was_timely_for_organ", type: "boolean", default: null }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "wasTimelyForOrgan", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "was_timely_for_tissue", type: "boolean", default: null }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "wasTimelyForTissue", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "circumstance_of_death",
            enum: opocdmEnums_1.CircumstanceOfDeath,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.CircumstanceOfDeath),
        __metadata("design:type", String)
    ], ReferralBase.prototype, "circumstanceOfDeath", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "mechanism_of_death",
            enum: unosEnums_1.MechanismOfDeath,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(unosEnums_1.MechanismOfDeath),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "mechanismOfDeath", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "admission_diagnosis",
            type: "varchar",
            length: 200,
            default: null,
        }),
        (0, class_validator_1.IsAlphanumeric)(),
        (0, class_validator_1.MaxLength)(200),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "admissionDiagnosis", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "has_history_of_hiv", type: "boolean" }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], ReferralBase.prototype, "hasHistoryOfHIV", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "has_history_of_hbv", type: "boolean" }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], ReferralBase.prototype, "hasHistoryOfHBV", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "has_history_of_hcv", type: "boolean" }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], ReferralBase.prototype, "hasHistoryOfHCV", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "has_history_of_cancer", type: "boolean" }),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], ReferralBase.prototype, "hasHistoryOfCancer", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "possible_systemic_infections",
            type: "varchar",
            length: 100,
            default: null,
        }),
        (0, class_validator_1.IsAlphanumeric)(),
        (0, class_validator_1.MaxLength)(100),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "possibleSystemicInfections", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "total_downtime", type: "int", default: null }),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "totalDowntime", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "pre_referral_approacher",
            type: "varchar",
            length: 100,
            default: null,
        }),
        (0, class_validator_1.MaxLength)(100),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "preReferralApproacher", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "pre_referral_approacher_credentials",
            enum: opocdmEnums_1.Credentials,
            type: "enum",
            default: null,
        }),
        (0, class_validator_1.IsEnum)(opocdmEnums_1.Credentials),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "preReferralApproacherCredentials", void 0);
    __decorate([
        (0, typeorm_1.Column)({ name: "attending_md", type: "varchar", length: 100, default: null }),
        (0, class_validator_1.MaxLength)(100),
        __metadata("design:type", Object)
    ], ReferralBase.prototype, "attendingMD", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return abg_1.ABGBase; }, function (x) { return x.referral; }),
        __metadata("design:type", Array)
    ], ReferralBase.prototype, "abgs", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cbc_1.CBCBase; }, function (x) { return x.referral; }),
        __metadata("design:type", Array)
    ], ReferralBase.prototype, "cbcs", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return culture_1.CultureBase; }, function (x) { return x.referral; }),
        __metadata("design:type", Array)
    ], ReferralBase.prototype, "cultures", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return labResult_1.LabResultBase; }, function (x) { return x.referral; }),
        __metadata("design:type", Array)
    ], ReferralBase.prototype, "labResults", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return urinalysis_1.UrinalysisBase; }, function (x) { return x.referral; }),
        __metadata("design:type", Array)
    ], ReferralBase.prototype, "urinalyses", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return staffTracking_1.StaffTrackingBase; }, function (x) { return x.referral; }),
        __metadata("design:type", Array)
    ], ReferralBase.prototype, "staffTrackings", void 0);
    ReferralBase = __decorate([
        (0, typeorm_1.Entity)({ name: "referral" }),
        __metadata("design:paramtypes", [])
    ], ReferralBase);
    return ReferralBase;
}(baseModel_1.BaseModel));
exports.ReferralBase = ReferralBase;
