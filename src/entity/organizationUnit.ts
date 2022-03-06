import { IsEnum, MaxLength, Min } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Referral } from "..";
import { BaseModel } from "./BaseModel";
import { Organization } from "./organization";

export enum UnitType {}

/**
 * Organization Unit
 */
@Entity({ name: "organization_unit" })
export class OrganizationUnit extends BaseModel {
  /**
   * @class
   * @ignore
   */
  constructor() {
    super();
  }

  /**
   * The name for the Unit
   * @max_length 100
   */
  @Column({ type: "varchar", length: 100 })
  @MaxLength(100)
  name: string;

  /**
   * The type of unit
   */
  @Column({ name: "unit_type", type: "enum", enum: UnitType })
  @IsEnum(UnitType)
  unitType: UnitType;

  /**
   * The count of beds
   * @max_length 4
   * @minimum 1
   */
  @Column({ name: "bed_count", type: "int", default: null })
  @Min(1)
  bedCount?: number | null;

  /**
   * The referrals that belong in this unit
   */
  referrals?: Referral[];

  /**
   * The Organization this unit is a part of
   * @format uuid
   */
  @Column({ type: "uuid", default: null, name: "organization_id" })
  organizationId?: string | null;

  @ManyToOne(() => Organization, (x) => x.units)
  @JoinColumn({ name: "organization_id" })
  organization: Organization;
}
