import { State, TimeZone } from "../enum/opocdmEnums";
import { BaseModel } from "./baseModel";
import { OrganizationUnitBase } from "./organizationUnit";
import { ReferralBase } from "./referral";
/**
 * Organization
 */
export declare class OrganizationBase extends BaseModel {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The official name for the organization
     * @max_length 100
     */
    officialName: string;
    /**
     * The short name for the organization
     * @max_length 25
     */
    shortName?: string | null;
    /**
     * The policies and procedures for the organization
     * This informs a person how to interact with organization
     * @max_length 5000
     */
    policiesAndProcedures?: string | null;
    /**
     * The count of beds
     * @max_length 5
     * @decimal_places 0
     * @minimum 1
     */
    bedCount?: number | null;
    /**
     * The unique code used to identify organizations
     * @max_length 4
     */
    code?: string | null;
    /**
     * The Organization's Address Line 1
     * @max_length 50
     */
    address1?: string | null;
    /**
     * The Organization's Address Line 2
     * @max_length 50
     */
    address2?: string | null;
    /**
     * The Organization's City
     * @max_length 50
     */
    city?: string | null;
    /**
     * The Organization's State
     */
    state?: State | null;
    /**
     * The Organization's County
     * @max_length 50
     */
    county?: string | null;
    /**
     * The Organization's Postal Code
     * @max_length 15
     */
    postalCode?: string | null;
    /**
     * The Organization's Primary Timezone
     */
    timezone?: TimeZone | null;
    /**
     * National Provider Index
     * @max_length 15
     */
    npi?: string | null;
    /**
     * CMS Id
     * @max_length 15
     */
    cmsId?: string | null;
    /**
     * Phone Number
     * @pattern ^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$
     */
    phone?: string | null;
    /**
     * Fax Number
     * @pattern ^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$
     */
    fax?: string | null;
    referrals: ReferralBase[];
    units: OrganizationUnitBase[];
}
