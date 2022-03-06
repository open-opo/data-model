/* eslint-disable no-unused-vars */
/**
 * Renal Data for uploading to UNOS
 */
export interface RenalData {
  /**
   * The referral this applies to
   * @format uuid
   */
  referralId: string;

  /**
   * Warm Ischemic Duration (in minutes)
   * @maxLength 4
   * @default 0
   */
  warmIschemicDuration: number;

  /**
   * Was the Left Kidney Biopsied
   * @default false
   */
  wasLeftKidneyBiopsied: boolean;

  /**
   *Left Kidney Biopsy Type
   */
  leftKidneyBiopsyType?: KidneyBiopsyType | null;

  /**
   * Left Kidney Glomeruli Sclerosis Percent
   * @maxLength 3
   */
  leftKidneyGlomeruliSclerosis?: number | null;

  /**
   * Left Kidney Glomeruli Found
   * @maxLength 3
   */
  leftKidneyGlomeruliFound?: number | null;

  /**
   * Left Kidney Pump Device
   */
  leftKidneyPumpDevice?: KidneyPumpType | null;

  /**
   * Left Kidney Pump Solution
   */
  leftKidneyPumpSolution?: KidneyPumpSolution | null;

  /**
   * Left Kidney Comment
   * @maxLength 2000
   */
  leftKidneyComment?: string | null;

  /**
   * Was the Right Kidney Biopsied
   * @default false
   */
  wasRightKidneyBiopsied: boolean;

  /**
   * Right Kidney Biopsy Type
   */
  rightKidneyBiopsyType?: KidneyBiopsyType | null;

  /**
   * Right Kidney Glomeruli Sclerosis Percent
   * @maxLength 3
   */
  rightKidneyGlomeruliSclerosis?: number | null;

  /**
   * Right Kidney Glomeruli Found
   * @maxLength 3
   */
  rightKidneyGlomeruliFound?: number | null;

  /**
   * Right Kidney Pump Device
   */
  rightKidneyPumpDevice?: KidneyPumpType | null;

  /**
   * Right Kidney Pump Solution
   */
  rightKidneyPumpSolution?: KidneyPumpSolution | null;

  /**
   * Right Kidney Comment
   * @maxLength 2000
   */
  rightKidneyComment?: string | null;
}

export enum KidneyBiopsyType {
  Wedge = "Wedge",
  Needle = "Needle",
}

export enum KidneyPumpType {
  ORSLifePort = "ORS LifePort",
  WatersRM3 = "Waters RM3",
  WatersWaves = "Waters Waves",
}

export enum KidneyPumpSolution {
  Belzer = "Belzer",
  KPS = "KPS",
  SilicaGel = "Silica Gel",
  MPS = "MPS",
  SPS = "SPS",
}
