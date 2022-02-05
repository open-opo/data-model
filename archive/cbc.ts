import { IsDate, IsDecimal, IsUUID, MaxLength } from "class-validator";
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseModel } from "./BaseModel";
import { Referral } from "./Referral";

/**
 * Represents a Complete Blood Count
 *
 * There will be a CBC for each draw, so a referral will have multiple CBCs
 */
@Entity({ name: "cbc" })
export class CBC extends BaseModel {
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
  @ManyToOne(() => Referral, (referral: Referral) => referral.cbcs)
  @JoinColumn({ name: "referral_id" })
  referral: Referral;

  /**
   * (wbc) White Blood Cells
   *
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  wbc?: number | null;

  /**
   * (rbc) Red Blood Cells is the number of red blood cells in the blood.
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  rbc?: number | null;

  /**
   * Hemoglobin is the amount of red blood cells in a person's blood.
   *
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  hgb?: number | null;

  /**
   * Hematocrit is the volume of red blood cells in a person's blood divided by the volume of all blood in a person's blood.
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  hct?: number | null;

  /**
   * Platelets is the number of white blood cells in a person's blood.
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  platelets?: number | null;

  /**
   * Neutrophils is the number of white blood cells in a person's blood.
   *
   *
   * https://en.wikipedia.org/wiki/Neutrophil
   *
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  segs?: number | null;

  /**
   * Lymphocytes is the number of white blood cells in a person's blood.
   *
   *
   *
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
   * Mononucleosis is a common infection in children.
   *
   *
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  mono?: number | null;

  /**
   * Eosinophil is a common infection in children.
   *
   *
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
