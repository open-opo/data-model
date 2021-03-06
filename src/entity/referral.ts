/* eslint-disable no-unused-vars */
import { BaseModel } from "./baseModel";
import {
  Race,
  Sex,
  Credentials,
  CircumstanceOfDeath,
  RegistryStatus,
  RegistrySource,
} from "../enum/opocdmEnums";
import {
  CauseOfDeath as CauseOfDeathUNOS,
  MechanismOfDeath as MechanismOfDeathUNOS,
} from "../enum/unosEnums";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import {
  IsAlpha,
  IsAlphanumeric,
  IsBoolean,
  IsDate,
  IsDecimal,
  IsEnum,
  IsInt,
  IsNumber,
  IsPhoneNumber,
  IsUUID,
  MaxLength,
} from "class-validator";
import { ABGBase } from "./abg";
import { CBCBase } from "./cbc";
import { CultureBase } from "./culture";
import { LabResultBase } from "./labResult";
import { OrganizationBase } from "./organization";
import { StaffTrackingBase } from "./staffTracking";
import { UrinalysisBase } from "./urinalysis";
import { OrganizationUnitBase } from "./organizationUnit";

/**
 * The current organ status for a case
 */
export enum OrganStatus {}

/**
 * The current tissue status for a case
 */
export enum TissueStatus {}

/**
 * The current family status for a case
 */
export enum FamilyStatus {}

/**
 * Cause of Death (COD)
 *
 * [ToDo: Description]
 */
export enum CauseOfDeath {
  AAA = "AAA",
  Exsanguination = "Exsanguination",
  FetalDemise = "Fetal Demise",
  GSW = "GSW",
  Hepatitis = "Hepatitis",
  HIV = "HIV",
  ICBICH = "ICB/ICH",
  InfectiousDisease_Viral = "Infectious Disease Viral",
  InfectiousDisease_Bacterial = "Infectious Disease Bacterial",
  InfectiousDisease_Other = "Infectious Disease Other",
  LeukemiaLymphoma = "Leukemia/Lymphoma",
  Arrhythmia = "Arrhythmia",
  MultisystemFailure = "Multi-system Failure",
  MyocardialInfarction = "Myocardial Infarction",
  Overdose = "Overdose",
  Pneumonia = "Pneumonia",
  PulmonaryEmbolism = "Pulmonary Embolism",
  Respiratory = "Respiratory",
  Sepsis = "Sepsis",
  SAH = "SAH",
  SuddenInfantDeathSyndrome = "Sudden Infant Death Syndrome",
  Cancer = "Cancer",
  Trauma = "Trauma",
  Prematurity = "Prematurity",
  Cardiac = "Cardiac",
  CHF = "CHF",
  COPD = "COPD",
  Drowning = "Drowning",
  ESLD = "ESLD",
  ESRD = "ESRD",
  Other = "Other",
}

export enum ReferralType {
  OrganTissueEye = "Organ Tissue Eye",
  OrganTissue = "Organ Tissue",
  OrganEye = "Organ Eye",
  Organ = "Organ",
  TissueEye = "Tissue Eye",
  Tissue = "Tissue",
  Eye = "Eye",
  RuleOut = "Rule Out",
}

export enum ReferralSource {}

/**
 * Represents a Referral
 *
 * [ToDo: Description]
 */
@Entity({ name: "referral" })
export class ReferralBase extends BaseModel {
  /**
   * @class
   * @ignore
   */
  constructor() {
    super();
  }

  /**
   * The Patient's First Name
   * @max_length 50
   */
  @Column({ name: "patient_firstname", type: "varchar", length: 50 })
  @MaxLength(50)
  patientFirstName: string;

  /**
   * The Patient's Last Name
   * @max_length 50
   */
  @Column({ name: "patient_lastname", type: "varchar", length: 50 })
  @MaxLength(50)
  patientLastName: string;

  /**
   * The Patient's Middle Name
   * @max_length 25
   */
  @Column({
    name: "patient_middlename",
    type: "varchar",
    length: 25,
    default: null,
  })
  @MaxLength(25)
  patientMiddleName?: string | null;

  /**
   * The Patient's Nick Name
   * @max_length 25
   */
  @Column({
    name: "patient_nickname",
    type: "varchar",
    length: 25,
    default: null,
  })
  @MaxLength(25)
  patientNickName?: string | null;

  /**
   * The race of a person
   */
  @Column({ name: "race", enum: Race, type: "enum" })
  @IsEnum(Race)
  race: Race;

  /**
   * The sex of a person
   * @default Unknown
   */
  @Column({ name: "sex", default: Sex.Unknown, enum: Sex, type: "enum" })
  @IsEnum(Sex)
  sex: Sex;

  /**
   * The weight at referral in Kg (rounded two decimal placed)
   * @max_length 5
   * @decimalPlaces 2
   */
  @Column({ name: "initial_weight", type: "decimal", default: null })
  @IsDecimal()
  @MaxLength(5)
  initialWeight?: number | null;

  /**
   * The height at referral in Cm (rounded to the nearest whole number)
   * @max_length 3
   */
  @Column({ name: "inital_height", type: "int", default: null })
  @IsNumber()
  initialHeight?: number | null;

  /**
   * Was the patient referred on a ventilator
   * @default false
   */
  @Column({ name: "is_referred_on_vent", default: false, type: "boolean" })
  @IsBoolean()
  isReferredOnVent: boolean;

  /**
   * Was the patient on a ventilator at somepoint during their hospital encounter
   */
  @Column({ name: "was_onvent", type: "boolean", default: null })
  @IsBoolean()
  wasOnVent?: boolean | null;

  /**
   * UNOS Donor Id
   * @max_length 20
   */
  @Column({ name: "unos_donor_id", type: "varchar", length: 20, default: null })
  @MaxLength(20)
  @IsAlphanumeric()
  unosDonorId?: string | null;

  /**
   * The organization id that referred this patient
   * @format uuid
   */
  @Column({ name: "referring_organization_id", type: "uuid", default: null })
  @IsUUID()
  referringOrganizationId?: string | null;

  /**
   * The organization that referred this patient
   */
  @ManyToOne(() => OrganizationBase, (x: OrganizationBase) => x.referrals)
  @JoinColumn({ name: "referring_organization_id" })
  referringOrganization: OrganizationBase;

  /**
   * The datetime when the referral was received
   */
  @Column({ name: "referred_at", type: "timestamp" })
  @IsDate()
  referredAt: Date;

  /**
   * The datetime when the patient was admitted to the referring organization
   */
  @Column({ name: "admitted_at", type: "timestamp", default: null })
  @IsDate()
  admittedAt?: Date | null;

  /**
   * The datetime when the patient met clinical triggers for donation
   */
  @Column({
    name: "clinical_triggers_met_at",
    type: "timestamp",
    default: null,
  })
  @IsDate()
  clinicalTriggersMetAt?: Date | null;

  /**
   * The datetime when a patients heart stopped beating
   */
  @Column({ name: "cardiac_death_at", type: "timestamp", default: null })
  @IsDate()
  cardiacdeathAt?: Date | null;

  /**
   * The datetime when a patient was declared brain dead
   */
  @Column({ name: "braindeath1_at", type: "timestamp", default: null })
  @IsDate()
  braindeath1At?: Date | null;

  /**
   * The second datetime when a patient was declared brain dead
   */
  @Column({ name: "braindeath2_at", type: "timestamp", default: null })
  @IsDate()
  braindeath2At?: Date | null;

  /**
   * The datetime when the patient was extubated
   */
  @Column({ name: "extubated_at", type: "timestamp", default: null })
  @IsDate()
  extubatedAt?: Date | null;

  /**
   * The OPO case number for this referral
   * @max_length 15
   */
  @Column({ name: "case_number", type: "varchar", length: 15 })
  @MaxLength(15)
  caseNumber: string;

  /**
   * The Id that we will use when we submit this referral to UNOS
   * @format uuid
   */
  @Column({ name: "unos_record_id", type: "uuid", default: null })
  @IsUUID()
  unosRecordId?: string | null;

  /**
   * The unit id where the patient is currently located
   * @format uuid
   */
  @Column({ name: "unit_id", type: "uuid", default: null })
  @IsUUID()
  unitId?: string | null;

  /**
   * The unit the patient is currently located in
   */
  @ManyToOne(
    () => OrganizationUnitBase,
    (x: OrganizationUnitBase) => x.referrals
  )
  @JoinColumn({ name: "unit_id" })
  unit: OrganizationUnitBase;

  /**
   * The room the patient is currently located in
   * @max_length 100
   */
  @Column({ name: "room", type: "varchar", length: 100, default: null })
  @MaxLength(100)
  room?: string | null;

  /**
   * The referrer's first name
   * @max_length 50
   */
  @Column({
    name: "referrer_firstname",
    type: "varchar",
    length: 50,
    default: null,
  })
  @MaxLength(50)
  @IsAlpha()
  referrerFirstName?: string | null;

  /**
   * The referrer's last name
   * @max_length 50
   */
  @Column({
    name: "referrer_lastname",
    type: "varchar",
    length: 50,
    default: null,
  })
  @MaxLength(50)
  @IsAlpha()
  referrerLastName?: string | null;

  /**
   * The referrer's credentials
   */
  @Column({
    name: "referrer_credentials",
    enum: Credentials,
    type: "enum",
    default: null,
  })
  @IsEnum(Credentials)
  referrerCredentials?: Credentials | null;

  /**
   * A phone number near the location of the patient
   * @pattern ^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$
   */
  @Column({
    name: "referrer_phone",
    type: "varchar",
    length: 15,
    default: null,
  })
  @IsPhoneNumber()
  referrerPhone?: string | null;

  /**
   * A phone extension near the location of the patient
   * @max_length 5
   */
  @Column({
    name: "referrer_phone_ext",
    type: "varchar",
    length: 5,
    default: null,
  })
  @MaxLength(5)
  referrerPhoneExt?: string | null;

  /**
   * The patient's birthdate
   */
  @Column({ name: "birthdate", type: "date", default: null })
  @IsDate()
  birthDate?: Date | null;

  /**
   * The patients Cause of Death (OPO perspective)
   */
  @Column({ name: "cod_opo", enum: CauseOfDeath, type: "enum", default: null })
  @IsEnum(CauseOfDeath)
  codOPO?: CauseOfDeath | null;

  /**
   * The patients Cause of Death (UNOS perspective)
   */
  @Column({
    name: "cod_unos",
    enum: CauseOfDeathUNOS,
    type: "enum",
    default: null,
  })
  @IsEnum(CauseOfDeathUNOS)
  codUNOS?: CauseOfDeathUNOS | null;

  /**
   * Is the DCD Criteria met
   */
  @Column({ name: "is_dcd_criteria_met", type: "boolean", default: null })
  isDCDCriteriaMet?: boolean | null;

  /**
   * The current organ donor registry status for this patient
   */
  @Column({
    name: "registry_status",
    enum: RegistryStatus,
    type: "enum",
    default: null,
  })
  @IsEnum(RegistryStatus)
  registryStatus?: RegistryStatus | null;

  /**
   * The source of the organ donor registry
   */
  @Column({
    name: "registry_source",
    enum: RegistrySource,
    type: "enum",
    default: null,
  })
  @IsEnum(RegistrySource)
  registrySource?: RegistrySource | null;

  /**
   * The current status of this patient (in regards to Organ donation)
   */
  @Column({
    name: "organ_status",
    enum: OrganStatus,
    type: "enum",
    default: null,
  })
  @IsEnum(OrganStatus)
  organStatus?: OrganStatus | null;

  /**
   * The current status of this patient (in regards to Tissue donation)
   */
  @Column({
    name: "tissue_status",
    enum: TissueStatus,
    type: "enum",
    default: null,
  })
  @IsEnum(TissueStatus)
  tissueStatus?: TissueStatus | null;

  /**
   * The current status of this patient (in regards to the OPOs Family Services Dept.)
   */
  @Column({
    name: "family_status",
    enum: FamilyStatus,
    type: "enum",
    default: null,
  })
  @IsEnum(FamilyStatus)
  familyStatus?: FamilyStatus | null;

  /**
   * The current type of referral (Organ, Tissue, Eye)
   */
  @Column({
    name: "referral_type",
    enum: ReferralType,
    type: "enum",
    default: null,
  })
  @IsEnum(ReferralType)
  referralType?: ReferralType | null;

  /**
   * The patient's medical record number in the referring organization's EMR system
   * @max_length 20
   */
  @Column({ name: "mrn", type: "varchar", length: 20, default: null })
  @IsAlphanumeric()
  @MaxLength(20)
  mrn?: string | null;

  /**
   * Is the referral completed?
   * @default false
   */
  @Column({ name: "is_referral_complete", type: "boolean" })
  @IsBoolean()
  isReferralComplete: boolean;

  /**
   * Where did we find out about this referral
   */
  @Column({ name: "referral_source", enum: ReferralSource, type: "enum" })
  @IsEnum(ReferralSource)
  referralSource: ReferralSource;

  /**
   * The external refererence number (if there is a record of this transaction in another system)
   * @max_length 36
   */
  @Column({
    name: "external_reference_number",
    type: "varchar",
    length: 36,
    default: null,
  })
  @IsAlphanumeric()
  @MaxLength(36)
  externalReferenceNumber?: string | null;

  /**
   * Was the referral timely for Organ Donation
   * @default null
   */
  @Column({ name: "was_timely_for_organ", type: "boolean", default: null })
  @IsBoolean()
  wasTimelyForOrgan?: boolean | null;

  /**
   * Was the referral timely for Tissue Donation
   * @default null
   */
  @Column({ name: "was_timely_for_tissue", type: "boolean", default: null })
  @IsBoolean()
  wasTimelyForTissue?: boolean | null;

  /**
   * What was the circumstance surrounding this death
   */
  @Column({
    name: "circumstance_of_death",
    enum: CircumstanceOfDeath,
    type: "enum",
    default: null,
  })
  @IsEnum(CircumstanceOfDeath)
  circumstanceOfDeath?: CircumstanceOfDeath;

  /**
   * What was the mechanism of death
   */
  @Column({
    name: "mechanism_of_death",
    enum: MechanismOfDeathUNOS,
    type: "enum",
    default: null,
  })
  @IsEnum(MechanismOfDeathUNOS)
  mechanismOfDeath?: MechanismOfDeathUNOS | null;

  /**
   * What was the Admission Diagnosis
   * @max_length 200
   */
  @Column({
    name: "admission_diagnosis",
    type: "varchar",
    length: 200,
    default: null,
  })
  @IsAlphanumeric()
  @MaxLength(200)
  admissionDiagnosis?: string | null;

  /**
   * Has History of HIV
   * @default false
   */
  @Column({ name: "has_history_of_hiv", type: "boolean" })
  @IsBoolean()
  hasHistoryOfHIV: boolean;

  /**
   * Has History of HBV
   * @default false
   */
  @Column({ name: "has_history_of_hbv", type: "boolean" })
  @IsBoolean()
  hasHistoryOfHBV: boolean;

  /**
   * Has History of HCV
   * @default false
   */
  @Column({ name: "has_history_of_hcv", type: "boolean" })
  @IsBoolean()
  hasHistoryOfHCV: boolean;

  /**
   * Has History of Cancer
   * @default false
   */
  @Column({ name: "has_history_of_cancer", type: "boolean" })
  @IsBoolean()
  hasHistoryOfCancer: boolean;

  /**
   * The systemic infections the patient might have
   * @default null
   * @max_length 100
   */
  @Column({
    name: "possible_systemic_infections",
    type: "varchar",
    length: 100,
    default: null,
  })
  @IsAlphanumeric()
  @MaxLength(100)
  possibleSystemicInfections?: string | null;

  /**
   * Total minutes patient was down (Cardiac Arrest or other)
   * @default null
   * @decimalPlaces 0
   */
  @Column({ name: "total_downtime", type: "int", default: null })
  @IsInt()
  totalDowntime?: number | null;

  /**
   * Person who approached for donation before referral started
   * @default null
   * @max_length 100
   */
  @Column({
    name: "pre_referral_approacher",
    type: "varchar",
    length: 100,
    default: null,
  })
  @MaxLength(100)
  preReferralApproacher?: string | null;

  /**
   * The credentials of the person who approached for donation before referral started
   * @default null
   */
  @Column({
    name: "pre_referral_approacher_credentials",
    enum: Credentials,
    type: "enum",
    default: null,
  })
  @IsEnum(Credentials)
  preReferralApproacherCredentials?: Credentials | null;

  /**
   * The patient's attending doctor
   *
   * [ToDo] It would be great if this was a dropdown instead of a free text field
   *
   * @max_length 100
   */
  @Column({ name: "attending_md", type: "varchar", length: 100, default: null })
  @MaxLength(100)
  attendingMD?: string | null;

  // Relationships
  @OneToMany(() => ABGBase, (x: ABGBase) => x.referral)
  abgs: ABGBase[];

  @OneToMany(() => CBCBase, (x: CBCBase) => x.referral)
  cbcs: CBCBase[];

  @OneToMany(() => CultureBase, (x: CultureBase) => x.referral)
  cultures: CultureBase[];

  @OneToMany(() => LabResultBase, (x: LabResultBase) => x.referral)
  labResults: LabResultBase[];

  @OneToMany(() => UrinalysisBase, (x: UrinalysisBase) => x.referral)
  urinalyses: UrinalysisBase[];

  @OneToMany(() => StaffTrackingBase, (x: StaffTrackingBase) => x.referral)
  staffTrackings: StaffTrackingBase[];
}
