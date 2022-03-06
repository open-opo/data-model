"use strict";
/**
 * This is the doc comment for file1.ts
 *
 * Specify this is a module comment without renaming it:
 * @module
 */
// export { ABG, Mode as ABGMode } from "./entity/Abg";
// export { CBC } from "./entity/cbc";
// export {
//   Culture,
//   Result as CultureResult,
//   Source as CultureSource,
// } from "./entity/culture";
// export { LabResult } from "./entity/labResult";
// export { Organization } from "./entity/organization";
// export {
//   OrganizationUnit,
//   UnitType as OrganizationUnitUnitType,
// } from "./entity/organizationUnit";
// export {
//   Referral,
//   ReferralSource,
//   ReferralType,
//   cause_of_death,
//   family_status,
//   organ_status,
//   tissue_status,
// } from "./entity/referral";
// export { StaffTracking } from "./entity/StaffTracking";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
// // Exporting opocdm Enums
// export {
//   State,
//   CircumstanceOfDeath,
//   Credentials,
//   Race,
//   Sex,
//   TimeZone,
//   RegistrySource,
//   RegistryStatus,
// } from "./enum/opocdmEnums";
var Organization_1 = require("./Administration/Organization");
Object.defineProperty(exports, "Organization", { enumerable: true, get: function () { return Organization_1.Organization; } });
// export { Urinalysis } from "./durinalysis";
// export * as UrinalysisEnums from "./urinalysis/enums";
// // Exporting UNOS Enums
// export {
//   cause_of_death as cause_of_death_UNOS,
//   mechanism_of_death as mechanism_of_death_unos,
// } from "./enum/unosEnums";
