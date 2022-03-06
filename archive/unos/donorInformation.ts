import { CircumstanceOfDeath, Race, Sex } from "../../enum/opocdmEnums";
import { MechanismOfDeath, CauseOfDeath } from "../../enum/unosEnums";

/**
 * UNOS DonorInformation for uploading to UNOS
 */
export interface DonorInformation {
  /**
   * The four digit code to identify OPO
   */
  opoCenterCode: string;

  /**
   * The four digit code to identify OPO
   * @maxLength 4
   * @minLength 4
   */
  unosId: string;

  /**
   * The Patient's Blood Type
   * @maxLength 5
   */
  abo: string;

  /**
   * The Patient's Last Name
   * @maxLength 25
   * @minLength 2
   */
  lastName: string;

  /**
   * The Patient's First Name
   * @maxLength 25
   * @minLength 2
   */
  firstName: string;

  /**
   * The Patient's Date of Birth
   */
  birthdate: Date;

  /**
   * The Patient's Birth Gender
   */
  gender: Sex;

  /**
   * The Patient's Height in Cm
   * @maxLength 3
   */
  height: number;

  /**
   * The Patient's Weight in Kg
   * @maxLength 4
   * @decimalPlaces 1
   */
  weight: number;

  /**
   * The Patient's Race
   */
  race: Race;

  /**
   * The Patient's Cause Of Death
   */
  cod: CauseOfDeath;

  /**
   * The Patient's Mechanism of Death
   */
  mechanismOfDeath: MechanismOfDeath;

  /**
   * The Patient's Circumstance Of Death
   */
  circumstanceOfDeath: CircumstanceOfDeath;

  /**
   * The time the patient was pronounced (Brain Dead or Cardiac Dead)
   */
  pronouncedAt?: Date | null;

  /**
   * The time the patient was admitted to the referring organization
   */
  admittedAt: Date;

  /**
   * The time the patient was crossclamped in the OR
   */
  crossclampedAt?: Date | null;

  /**
   * The duration in minutes CPR was administered
   * @maxLength 3
   */
  cprDuration?: number | null;

  /**
   * The duration in minutes the patient heart was not beating (Cardiac Arrest)
   */
  downtime?: number | null;

  /**
   * The tox screen results
   * @maxLength 255
   */
  urineToxicologyResult?: string | null;

  /**
   * Was the DCD Criteria met for the patient
   */
  isDCDCriteriaMet: boolean;

  /**
   * Was the Double Kidney Criteria met for the patient
   */
  isDoubleKidneyCriteriaMet?: boolean | null;

  /**
   * The events that led up to donation
   * @maxLength 5000
   */
  admissionCourse: string;
}
