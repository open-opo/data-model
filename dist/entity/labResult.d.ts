import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";
/**
 * Represents a Lab Result
 *
 * There will be a Lab Result for each draw, so a referral will have multiple Labs
 */
export declare class LabResultBase extends BaseModel {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The referral Id this applies to
     * @format uuid
     */
    referralId: string;
    /**
     * The referral this applies to
     */
    referral: ReferralBase;
    /**
     * Sodium
     * @max_length 4
     * @decimal_places 0
     */
    na?: number | null;
    /**
     * Potassium
     * @max_length 2
     * @decimal_places 1
     */
    k?: number | null;
    /**
     * Cardiac Index
     * @max_length 3
     * @decimal_places 0
     */
    ci?: number | null;
    /**
     * Carbon Dioxide
     * @max_length 3
     * @decimal_places 0
     */
    co2?: number | null;
    /**
     * Blood Urea Nitrogen
     * @max_length 3
     * @decimal_places 0
     */
    bun?: number | null;
    /**
     * Creatinine
     * @max_length 3
     * @decimal_places 1
     */
    creatinine?: number | null;
    /**
     * Creatinine Clearance
     * @max_length 5
     * @decimal_places 2
     */
    creatinineClearance?: number | null;
    /**
     * Glucose
     * @max_length 3
     * @decimal_places 0
     */
    glucose?: number | null;
    /**
     * Calcium
     * @max_length 3
     * @decimal_places 1
     */
    calcium?: number | null;
    /**
     * Ionized Calcium
     * @max_length TBD
     * @decimal_places TBD
     */
    ionizedCalcium?: number | null;
    /**
     * Magnesium
     * @max_length 3
     * @decimal_places 1
     */
    mg?: number | null;
    /**
     * Phosphorus
     * @max_length 3
     * @decimal_places 1
     */
    phosphorus?: number | null;
    /**
     * Lactate
     * @max_length TBD
     * @decimal_places TBD
     */
    lactate?: number | null;
    /**
     * Total Bilirubin
     * @max_length TBD
     * @decimal_places TBD
     */
    totalBilirubin?: number | null;
    /**
     * Direct Bilirubin
     * @max_length TBD
     * @decimal_places TBD
     */
    directBilirubin?: number | null;
    /**
     * Indirect Bilirubin
     * @max_length TBD
     * @decimal_places TBD
     */
    indirectBilirubin?: number | null;
    /**
     * AST (SGOT)
     * @max_length TBD
     * @decimal_places TBD
     */
    ast?: number | null;
    /**
     * ALT (SGPT)
     * @max_length TBD
     * @decimal_places TBD
     */
    alt?: number | null;
    /**
     * Alkaline Phosphatase
     * @max_length TBD
     * @decimal_places TBD
     */
    alp?: number | null;
    /**
     * Gamma-Glutamyl Transferase
     * @max_length TBD
     * @decimal_places TBD
     */
    ggt?: number | null;
    /**
     * Albumin
     * @max_length TBD
     * @decimal_places 0
     */
    albumin?: number | null;
    /**
     * Total Protein
     * @max_length TBD
     * @decimal_places TBD
     */
    totalProtein?: number | null;
    /**
     * Lactate Dehydrogenase
     * @max_length TBD
     * @decimal_places TBD
     */
    ldh?: number | null;
    /**
     * Prothrombin Time
     * @max_length TBD
     * @decimal_places TBD
     */
    pt?: number | null;
    /**
     * International Normalized Ratio
     * @max_length TBD
     * @decimal_places TBD
     */
    inr?: number | null;
    /**
     * Partial Thromboplastin Time
     * @max_length TBD
     * @decimal_places TBD
     */
    ptt?: number | null;
    /**
     * Creatine Kinase MB
     * @max_length TBD
     * @decimal_places TBD
     */
    ckmb?: number | null;
    /**
     * Creatine Phosphokinase
     * @max_length TBD
     * @decimal_places TBD
     */
    cpk?: number | null;
    /**
     * Creatine Phosphokinase Index
     * @max_length TBD
     * @decimal_places TBD
     */
    cpkIndex?: number | null;
    /**
     * Total MB
     * @max_length TBD
     * @decimal_places TBD
     */
    totalMB?: number | null;
    /**
     * Troponin-I
     * @max_length TBD
     * @decimal_places TBD
     */
    troponinI?: number | null;
    /**
     * Troponin-T
     * @max_length TBD
     * @decimal_places TBD
     */
    troponinT?: number | null;
    /**
     * Amylase
     * @max_length TBD
     * @decimal_places TBD
     */
    amylase?: number | null;
    /**
     * Lipase
     * @max_length TBD
     * @decimal_places TBD
     */
    lipase?: number | null;
    /**
     * Lipase ULN
     * @max_length TBD
     * @decimal_places TBD
     */
    lipaseULN?: number | null;
    /**
     * Hemoglobin A1c
     * @max_length TBD
     * @decimal_places TBD
     */
    a1c?: number | null;
    /**
     * BNP
     * @max_length TBD
     * @decimal_places TBD
     */
    bnp?: number | null;
    /**
     * Serum Osmolality
     * @max_length TBD
     * @decimal_places TBD
     */
    serumOsmolality?: number | null;
    /**
     * Serum Beta HCG
     * @max_length TBD
     * @decimal_places TBD
     */
    serumBetaHCG?: number | null;
    /**
     * Fibrinogen
     * @max_length TBD
     * @decimal_places TBD
     */
    fibrinogen?: number | null;
    /**
     * The Id that we will use when we submit this CBC to UNOS
     * @format uuid
     */
    unosRecordId?: string | null;
    /**
     * The datetime this was resulted
     */
    datetime: Date;
}
