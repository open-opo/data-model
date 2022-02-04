import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";
/**
 * What Type of Staff is Onsite
 *
 * [ToDo] We need help making this list
 */
export declare enum StaffType {
}
/**
 * What is the Staffing doing OnSite
 *
 * [ToDo] We need help making this list
 */
export declare enum StaffRole {
}
/**
 * Staff Tracking
 *
 * Use this to figure out what staff are on a referral
 */
export declare class StaffTrackingBase extends BaseModel {
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
     * Type of Staff Onsite
     */
    staffType: StaffType;
    /**
     * What is the staff onsite doing
     */
    role?: StaffRole;
    /**
     * Time in minutes spent onsite for role
     * @max_length 4
     */
    time: number;
}
