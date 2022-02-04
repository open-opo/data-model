import { BaseModel } from "./baseModel";
import { Race, Sex, Credentials, CircumstanceOfDeath, RegistryStatus, RegistrySource } from "../enum/opocdmEnums";
import { CauseOfDeath as CauseOfDeathUNOS, MechanismOfDeath as MechanismOfDeathUNOS } from "../enum/unosEnums";
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
export declare enum OrganStatus {
}
/**
 * The current tissue status for a case
 */
export declare enum TissueStatus {
}
/**
 * The current family status for a case
 */
export declare enum FamilyStatus {
}
/**
 * Cause of Death (COD)
 *
 * [ToDo: Description]
 */
export declare enum CauseOfDeath {
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
    Other = "Other"
}
export declare enum ReferralType {
    OrganTissueEye = "Organ Tissue Eye",
    OrganTissue = "Organ Tissue",
    OrganEye = "Organ Eye",
    Organ = "Organ",
    TissueEye = "Tissue Eye",
    Tissue = "Tissue",
    Eye = "Eye",
    RuleOut = "Rule Out"
}
export declare enum ReferralSource {
}
/**
 * Represents a Referral
 *
 * [ToDo: Description]
 */
export declare class ReferralBase extends BaseModel {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The Patient's First Name
     * @max_length 50
     */
    patientFirstName: string;
    /**
     * The Patient's Last Name
     * @max_length 50
     */
    patientLastName: string;
    /**
     * The Patient's Middle Name
     * @max_length 25
     */
    patientMiddleName?: string | null;
    /**
     * The Patient's Nick Name
     * @max_length 25
     */
    patientNickName?: string | null;
    /**
     * The race of a person
     */
    race: Race;
    /**
     * The sex of a person
     * @default Unknown
     */
    sex: Sex;
    /**
     * The weight at referral in Kg (rounded two decimal placed)
     * @max_length 5
     * @decimalPlaces 2
     */
    initialWeight?: number | null;
    /**
     * The height at referral in Cm (rounded to the nearest whole number)
     * @max_length 3
     */
    initialHeight?: number | null;
    /**
     * Was the patient referred on a ventilator
     * @default false
     */
    isReferredOnVent: boolean;
    /**
     * Was the patient on a ventilator at somepoint during their hospital encounter
     */
    wasOnVent?: boolean | null;
    /**
     * UNOS Donor Id
     * @max_length 20
     */
    unosDonorId?: string | null;
    /**
     * The organization id that referred this patient
     * @format uuid
     */
    referringOrganizationId?: string | null;
    /**
     * The organization that referred this patient
     */
    referringOrganization: OrganizationBase;
    /**
     * The datetime when the referral was received
     */
    referredAt: Date;
    /**
     * The datetime when the patient was admitted to the referring organization
     */
    admittedAt?: Date | null;
    /**
     * The datetime when the patient met clinical triggers for donation
     */
    clinicalTriggersMetAt?: Date | null;
    /**
     * The datetime when a patients heart stopped beating
     */
    cardiacdeathAt?: Date | null;
    /**
     * The datetime when a patient was declared brain dead
     */
    braindeath1At?: Date | null;
    /**
     * The second datetime when a patient was declared brain dead
     */
    braindeath2At?: Date | null;
    /**
     * The datetime when the patient was extubated
     */
    extubatedAt?: Date | null;
    /**
     * The OPO case number for this referral
     * @max_length 15
     */
    caseNumber: string;
    /**
     * The Id that we will use when we submit this referral to UNOS
     * @format uuid
     */
    unosRecordId?: string | null;
    /**
     * The unit id where the patient is currently located
     * @format uuid
     */
    unitId?: string | null;
    /**
     * The unit the patient is currently located in
     */
    unit: OrganizationUnitBase;
    /**
     * The room the patient is currently located in
     * @max_length 100
     */
    room?: string | null;
    /**
     * The referrer's first name
     * @max_length 50
     */
    referrerFirstName?: string | null;
    /**
     * The referrer's last name
     * @max_length 50
     */
    referrerLastName?: string | null;
    /**
     * The referrer's credentials
     */
    referrerCredentials?: Credentials | null;
    /**
     * A phone number near the location of the patient
     * @pattern ^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$
     */
    referrerPhone?: string | null;
    /**
     * A phone extension near the location of the patient
     * @max_length 5
     */
    referrerPhoneExt?: string | null;
    /**
     * The patient's birthdate
     */
    birthDate?: Date | null;
    /**
     * The patients Cause of Death (OPO perspective)
     */
    codOPO?: CauseOfDeath | null;
    /**
     * The patients Cause of Death (UNOS perspective)
     */
    codUNOS?: CauseOfDeathUNOS | null;
    /**
     * Is the DCD Criteria met
     */
    isDCDCriteriaMet?: boolean | null;
    /**
     * The current organ donor registry status for this patient
     */
    registryStatus?: RegistryStatus | null;
    /**
     * The source of the organ donor registry
     */
    registrySource?: RegistrySource | null;
    /**
     * The current status of this patient (in regards to Organ donation)
     */
    organStatus?: OrganStatus | null;
    /**
     * The current status of this patient (in regards to Tissue donation)
     */
    tissueStatus?: TissueStatus | null;
    /**
     * The current status of this patient (in regards to the OPOs Family Services Dept.)
     */
    familyStatus?: FamilyStatus | null;
    /**
     * The current type of referral (Organ, Tissue, Eye)
     */
    referralType?: ReferralType | null;
    /**
     * The patient's medical record number in the referring organization's EMR system
     * @max_length 20
     */
    mrn?: string | null;
    /**
     * Is the referral completed?
     * @default false
     */
    isReferralComplete: boolean;
    /**
     * Where did we find out about this referral
     */
    referralSource: ReferralSource;
    /**
     * The external refererence number (if there is a record of this transaction in another system)
     * @max_length 36
     */
    externalReferenceNumber?: string | null;
    /**
     * Was the referral timely for Organ Donation
     * @default null
     */
    wasTimelyForOrgan?: boolean | null;
    /**
     * Was the referral timely for Tissue Donation
     * @default null
     */
    wasTimelyForTissue?: boolean | null;
    /**
     * What was the circumstance surrounding this death
     */
    circumstanceOfDeath?: CircumstanceOfDeath;
    /**
     * What was the mechanism of death
     */
    mechanismOfDeath?: MechanismOfDeathUNOS | null;
    /**
     * What was the Admission Diagnosis
     * @max_length 200
     */
    admissionDiagnosis?: string | null;
    /**
     * Has History of HIV
     * @default false
     */
    hasHistoryOfHIV: boolean;
    /**
     * Has History of HBV
     * @default false
     */
    hasHistoryOfHBV: boolean;
    /**
     * Has History of HCV
     * @default false
     */
    hasHistoryOfHCV: boolean;
    /**
     * Has History of Cancer
     * @default false
     */
    hasHistoryOfCancer: boolean;
    /**
     * The systemic infections the patient might have
     * @default null
     * @max_length 100
     */
    possibleSystemicInfections?: string | null;
    /**
     * Total minutes patient was down (Cardiac Arrest or other)
     * @default null
     * @decimalPlaces 0
     */
    totalDowntime?: number | null;
    /**
     * Person who approached for donation before referral started
     * @default null
     * @max_length 100
     */
    preReferralApproacher?: string | null;
    /**
     * The credentials of the person who approached for donation before referral started
     * @default null
     */
    preReferralApproacherCredentials?: Credentials | null;
    /**
     * The patient's attending doctor
     *
     * [ToDo] It would be great if this was a dropdown instead of a free text field
     *
     * @max_length 100
     */
    attendingMD?: string | null;
    abgs: ABGBase[];
    cbcs: CBCBase[];
    cultures: CultureBase[];
    labResults: LabResultBase[];
    urinalyses: UrinalysisBase[];
    staffTrackings: StaffTrackingBase[];
}
