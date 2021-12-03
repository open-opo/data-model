import { IsDate, IsDecimal, IsUUID, MaxLength } from "class-validator";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";

/**
 * Represents a Complete Blood Count
 *
 * There will be a CBC for each draw, so a referral will have multiple CBCs
 */
@Entity({ name: "cbc" })
export class CBCBase extends BaseModel {
  /**
   * @class
   * @ignore
   */
  constructor() {
    super();
  }

  /**
   * The referral Id this applies to
   * @format uuid
   */
  @Column({ nullable: true, type: "uuid", name: "referral_id" })
  referralId: string;

  /**
   * The referral this applies to
   */
  @ManyToOne(() => ReferralBase, (referral: ReferralBase) => referral.cbcs)
  @JoinColumn({ name: "referral_id" })
  referral: ReferralBase;

  /**
   * White Blood Cells
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  wbc?: number | null;

  /**
   * Red Blood Cells
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  rbc?: number | null;

  /**
   * Hemoglobin
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  hgb?: number | null;

  /**
   * Hematocrit
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  hct?: number | null;

  /**
   * Platelets
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  platelets?: number | null;

  /**
   * Neutrophils
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  segs?: number | null;

  /**
   * Lymphocytes
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  lymphs?: number | null;

  /**
   * Bands
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  bands?: number | null;

  /**
   * Mononucleosis
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  mono?: number | null;

  /**
   * Eosinophil
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  eos?: number | null;

  /**
   * The Id that we will use when we submit this CBC to UNOS
   * @format uuid
   */
  @Column({ type: "uuid", name: "unos_record_id", default: null })
  @IsUUID()
  unosRecordId?: string | null;

  /**
   * The datetime this was resulted
   */
  @Column({ type: "timestamp" })
  @IsDate()
  datetime: Date;
}
