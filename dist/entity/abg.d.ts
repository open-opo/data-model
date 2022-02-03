import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";
/**
 * The Mode
 */
export declare enum Mode {
    NC = "NC",
    HFOV = "HFOV",
    APRV = "APRV",
    CMV = "CMV",
    Other = "Other",
    PC = "PC",
    CPAP = "CPAP",
    SIMV = "SIMV",
    PRVC = "PRVC",
    BiPAP = "BiPAP",
    AC = "AC",
    ApneaTest = "ApneaTest"
}
/**
 * Represents an Arterial Blood Gas
 *
 * There will be a Arterial Blood Gas for each draw, so a referral will have multiple ABGs
 */
export declare class ABGBase extends BaseModel {
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
     * pH
     * @max_length 4
     * @decimal_places 2
     */
    ph?: number | null;
    /**
     * pCO2
     * @max_length 5
     * @decimal_places 2
     */
    pco2?: number | null;
    /**
     * pc03
     * @max_length 5
     * @decimal_places 2
     */
    pc03?: number | null;
    /**
     * BE
     * @max_length 3
     * @decimal_places 2
     */
    be?: number | null;
    /**
     * HCO3
     * @max_length 4
     * @decimal_places 2
     */
    hco3?: number | null;
    /**
     * O2Sat
     * @max_length 4
     * @decimal_places 2
     */
    o2sat?: number | null;
    /**
     * FIO2
     * @max_length 3
     * @decimal_places 2
     */
    fio2?: number | null;
    /**
     * Respiration Rate
     * @max_length 3
     * @decimal_places 0
     */
    respirationRate?: number | null;
    /**
     * Tidal Volume
     * @max_length TBD
     * @decimal_places TBD
     */
    tv?: number | null;
    /**
     * PEEP
     * @max_length 3
     * @decimal_places 1
     */
    peep?: number | null;
    /**
     * PiP
     * @max_length 3
     * @decimal_places 0
     */
    pip?: number | null;
    /**
     * Mode
     */
    mode?: Mode | null;
    /**
     * The Id we use when we upload this to UNOS
     */
    unosRecordId?: string;
    /**
     * The datetime this was resulted
     */
    datetime: Date;
}
