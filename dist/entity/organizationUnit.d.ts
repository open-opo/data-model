import { ReferralBase } from "..";
import { BaseModel } from "./baseModel";
import { OrganizationBase } from "./organization";
export declare enum UnitType {
}
/**
 * Organization Unit
 */
export declare class OrganizationUnitBase extends BaseModel {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * The name for the Unit
     * @max_length 100
     */
    name: string;
    /**
     * The type of unit
     */
    unitType: UnitType;
    /**
     * The count of beds
     * @max_length 4
     * @minimum 1
     */
    bedCount?: number | null;
    /**
     * The referrals that belong in this unit
     */
    referrals?: ReferralBase[];
    /**
     * The Organization this unit is a part of
     * @format uuid
     */
    organizationId?: string | null;
    organization: OrganizationBase;
}
