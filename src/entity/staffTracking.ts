import { IsEnum, Min } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";

/**
 * What Type of Staff is Onsite
 *
 * [ToDo] We need help making this list
 */
export enum StaffType {}

/**
 * What is the Staffing doing OnSite
 *
 * [ToDo] We need help making this list
 */
export enum StaffRole {}

/**
 * Staff Tracking
 *
 * Use this to figure out what staff are on a referral
 */
@Entity({ name: "staff_tracking" })
export class StaffTrackingBase extends BaseModel {
  /**
   * @class
   * @ignore
   */
  constructor() {
    super();
  }

  /**
   * The referral this applies to
   * @format uuid
   */
  @Column({ nullable: true, type: "uuid", name: "referral_id" })
  referralId: string;

  @ManyToOne(() => ReferralBase, (x: ReferralBase) => x.staffTrackings)
  @JoinColumn({ name: "referral_id" })
  referral: ReferralBase;

  /**
   * Type of Staff Onsite
   */
  @Column({ name: "staff_type", enum: StaffType, type: "enum" })
  @IsEnum(StaffType)
  staffType: StaffType;

  /**
   * What is the staff onsite doing
   */
  @Column({ enum: StaffRole, type: "enum" })
  @IsEnum(StaffRole)
  role?: StaffRole;

  /**
   * Time in minutes spent onsite for role
   * @max_length 4
   */
  @Column({ type: "int" })
  @Min(1)
  time: number;
}
