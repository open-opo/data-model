/**
 * Mini Medical Social for uploading to UNOS
 */
export interface MiniMedSocial {
  /**
   * The referral this applies to
   */
  referralId: string;

  /**
   * Indicates if the patient has a history of Hypertension
   */
  hasHistoryOfHypertension: boolean;

  /**
   * Indicates if the patient has compliant with Hypertension Treatment
   */
  wasCompliantWithHypertensionTreatment?: boolean | null;

  /**
   * Indicates if the patient has a history of Diabetes
   */
  hasHistoryOfDiabetes: string;

  /**
   * Indicates if the patient has a history of Coronary Artery Disease
   */
  hasHistoryOfCAD: boolean;

  /**
   * Indicates if the patient has a history of Gastro-Intestinal Disease
   */
  hasHistoryOfGastrointestinalDisease: boolean;

  /**
   * Indicates if the patient has a history of Chest Trauma
   */
  hasHistoryOfChestTrauma: boolean;

  /**
   * Indicates if the patient has a history of Cancer
   */
  hasHistoryOfCancer: boolean;

  /**
   * Indicates if the patient has a history of something not listed above
   * @maxLength TBD
   */
  otherHistory: string;

  /**
   * Indicates if the patient has a history of cigarette use (over 20 packs a year)
   */
  hasHistoryOfCigarettes: boolean;

  /**
   * Indicates if the patient has continued use of cigarettes in the last 6 months
   */
  hasContinuedUseOfCigarettes?: boolean;

  /**
   * Indicates if the patient has a history of Heavy Alcohol use
   */
  hasHistoryOfHeavyAlcoholUse: boolean;

  /**
   * Indicates if the patient has a history of IV Drug use
   */
  hasHistoryOfIVDrugUse: boolean;

  /**
   * Indicates if the patient has the risk factors for blood-borne disease transmission
   */
  hasRiskFactorsForBloodBorneDisease: boolean;

  /**
   *  Contains any additional information a transplant center may want to know about this patient
   * @maxLength 2000
   */
  comments?: string | null;
}
