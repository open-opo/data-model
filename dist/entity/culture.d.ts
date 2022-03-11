import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";
export declare enum Source {
}
export declare enum Result {
    Positive = "Positive",
    Negative = "Negative",
    Inconclusive = "Inconclusive"
}
/**
 * Culture
 */
export declare class CultureBase extends BaseModel {
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
    /**
     * The referral this applies to
     */
    referral: ReferralBase;
    /**
     * Where the culture originated from
     */
    source: Source;
    /**
     * The result
     */
    result?: Result | null;
    /**
     * The result at 24 hours
     * @max_length 255
     */
    resultAt24?: string | null;
    /**
     * The result at 48 hours
     * @max_length 255
     */
    resultAt48?: string | null;
    /**
     * The final result
     * @max_length 255
     */
    resultAtFinal?: string | null;
    /**
     * The record Id that will be used when pushed to UNOS
     * @format uuid
     */
    unosRecordId?: string | null;
    /**
     * Datetime of result
     */
    datetime: Date;
}
