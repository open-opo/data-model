import { IsEnum, Min } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "./baseModel";
import { Referral } from "./referral";

/**
 * What Type of Staff is Onsite
 *
 * [ToDo] We need help making this list
 */
export enum staff_type {}

/**
 * What is the Staffing doing OnSite
 *
 * [ToDo] We need help making this list
 */
export enum staff_role {}

/**
 * Staff Tracking
 *
 * Use this to figure out what staff are on a referral
 */
@Entity({ name: "staff_tracking" })
export class staff_tracking extends BaseModel {
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

  @ManyToOne(() => Referral, (x: Referral) => x.staff_tracking)
  @JoinColumn({ name: "referral_id" })
  referral: Referral;

  /**
   * Type of Staff Onsite
   */
  @Column({ name: "staff_type", enum: staff_type, type: "enum" })
  @IsEnum(staff_type)
  staff_type: staff_type;

  /**
   * What is the staff onsite doing
   */
  @Column({ name: "role", enum: staff_role, type: "enum" })
  @IsEnum(staff_role)
  role?: staff_role;

  /**
   * Time in minutes spent onsite for role
   * @max_length 4
   */
  @Column({ type: "int" })
  @Min(1)
  time: number;
}
