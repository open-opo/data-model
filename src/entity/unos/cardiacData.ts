/**
 * Cardiac Data for uploading to UNOS
 */
export interface CardiacData {
  /**
   * The referral Id this applies to
   * @format uuid
   */
  referralId: string;

  /**
   * Left Ventricle Ejection Method
   */
  lvEjectionMethod?: EjectionMethod | null;

  /**
   * Shortening Fraction
   * @max_length 2
   * @decimal_places 2
   */
  sf?: number | null;

  /**
   * Esimated LV Ejection Fraction Percentage
   * @max_length 2
   * @decimal_places 0
   */
  estimatedLVEjectionFraction?: number | null;

  /**
   * Ventricle Septal Wall Thickness (in Cm)
   * @max_length 2
   * @decimal_places 0
   */
  septalWallThickness?: number | null;

  /**
   * LV Posterior Wall Thickness (in Cm)
   * @max_length 2
   * @decimal_places 0
   */
  posteriorWallThickness?: number | null;

  /**
   * General Comments
   * @max_length 2000
   */
  comments?: string;
}

/**
 * These are different methods for finding the Ejection Fraction
 */
export enum EjectionMethod {
  Echo = "Echo",
  MUGA = "MUGA",
  Angiogram = "Angiogram",
}
