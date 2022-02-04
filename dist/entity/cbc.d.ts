import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";
/**
 * Represents a Complete Blood Count
 *
 * There will be a CBC for each draw, so a referral will have multiple CBCs
 */
export declare class CBCBase extends BaseModel {
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
     * White Blood Cells
     * @max_length 5
     * @decimal_places 2
     */
    wbc?: number | null;
    /**
     * Red Blood Cells
     * @max_length 5
     * @decimal_places 2
     */
    rbc?: number | null;
    /**
     * Hemoglobin
     * @max_length 5
     * @decimal_places 2
     */
    hgb?: number | null;
    /**
     * Hematocrit
     * @max_length 5
     * @decimal_places 2
     */
    hct?: number | null;
    /**
     * Platelets
     * @max_length 5
     * @decimal_places 2
     */
    platelets?: number | null;
    /**
     * Neutrophils
     * @max_length 5
     * @decimal_places 2
     */
    segs?: number | null;
    /**
     * Lymphocytes
     * @max_length 5
     * @decimal_places 2
     */
    lymphs?: number | null;
    /**
     * Bands
     * @max_length 5
     * @decimal_places 2
     */
    bands?: number | null;
    /**
     * Mononucleosis
     * @max_length 5
     * @decimal_places 2
     */
    mono?: number | null;
    /**
     * Eosinophil
     * @max_length 5
     * @decimal_places 2
     */
    eos?: number | null;
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
