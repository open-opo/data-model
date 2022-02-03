import { ReferralBase } from "..";
import { BaseModel } from "./baseModel";
export declare enum Urinalysis_Color {
    Colorless = "Colorless",
    Straw = "Straw",
    Clear = "Clear",
    LightYellow = "Light Yellow",
    Yellow = "Yellow",
    DarkYellow = "Dark Yellow ",
    Amber = "Amber",
    LightOrange = "Light Orange",
    Orange = "Orange",
    DarkOrange = "Dark Orange",
    LightRed = "Light Red",
    Red = "Red",
    DarkRed = "Dark Red",
    LightBrown = "Light Brown",
    Brown = "Brown",
    DarkBrown = "Dark Brown",
    Pink = "Pink"
}
export declare enum Urinalysis_Appearance {
    Clear = "Clear",
    SlightlyCloudy = "Slightly Cloudy",
    Cloudy = "Cloudy",
    SlightlyHazy = "Slightly Hazy",
    Hazy = "Hazy",
    LightTurbid = "Light Turbid",
    Turbid = "Turbid"
}
export declare enum Urinalysis_Blood {
    Large = "Large",
    Moderate = "Moderate",
    Small = "Small",
    Trace = "Trace"
}
export declare enum Urinalysis_Bacteria {
    None = "None",
    Light = "Light",
    Moderate = "Moderate",
    Heavy = "Heavy"
}
export declare enum Urinalysis_Leukocyte {
    Trace = "Trace",
    Small = "Small",
    Moderate = "Moderate",
    Large = "Large"
}
/**
 * Urinalysis
 */
export declare class UrinalysisBase extends BaseModel {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The referral this applies to
     * @format uuid
     */
    referralId: string;
    referral: ReferralBase;
    /**
     * Color
     */
    color?: Urinalysis_Color;
    /**
     * Appearance
     */
    appearance?: Urinalysis_Appearance;
    /**
     * pH
     * @max_length 2
     * @decimal_places 1
     */
    ph?: number | null;
    /**
     * Specific Gravity
     * @max_length 5
     * @decimal_places 3
     */
    specificGravity?: number | null;
    /**
     * Protein
     * @max_length 3
     * @decimal_places 0
     */
    protein?: number | null;
    /**
     * Glucose
     * @max_length 3
     * @decimal_places 0
     */
    glucose?: number | null;
    /**
     * Blood
     */
    blood?: Urinalysis_Blood;
    /**
     * Red Blood Cells
     * @max_length 5
     * @decimal_places 2
     */
    rbc?: number | null;
    /**
     * White Blood Cells
     * @max_length 5
     * @decimal_places 2
     */
    wbc?: number | null;
    /**
     * Ketones
     * @max_length 3
     * @decimal_places 0
     */
    ketones?: number | null;
    /**
     * Casts
     * @max_length 5
     * @decimal_places 2
     */
    casts?: number | null;
    /**
     * Bacteria
     */
    bacteria?: Urinalysis_Bacteria;
    /**
     * Epith
     * @max_length 5
     * @decimal_places 2
     */
    epith?: number | null;
    /**
     * Leukocyte
     */
    leukocyte?: Urinalysis_Leukocyte;
    /**
     * Albumin Creatinine Ratio
     * @max_length 5
     * @decimal_places 3
     */
    acr?: number | null;
    /**
     * Urobilinogen
     * @max_length 5
     * @decimal_places 2
     */
    urobilinogen?: number | null;
    /**
     * Bilirubin
     * @max_length 4
     * @decimal_places 2
     */
    bilirubin?: number | null;
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
