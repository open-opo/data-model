import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import {
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  MaxLength,
  IsDecimal,
  IsUUID,
  isUUID,
  IsEnum,
} from "class-validator";
import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";

export enum Mode {
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
  ApneaTest = "ApneaTest",
}

/**
 * Represents an Arterial Blood Gas
 *
 * There will be a Arterial Blood Gas for each draw, so a referral will have multiple ABGs
 */
@Entity({ name: "abg" })
export class ABGBase extends BaseModel {
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
  @IsUUID()
  referralId: string;

  /**
   * The referral this applies to
   */
  @ManyToOne(() => ReferralBase, (referral: ReferralBase) => referral.abgs)
  @JoinColumn({ name: "referral_id" })
  referral: ReferralBase;

  /**
   * pH
   * @max_length 4
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(4)
  @IsDecimal({ decimal_digits: "2" })
  ph?: number | null;

  /**
   * pCO2
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  pco2?: number | null;

  /**
   * BE
   * @max_length 3
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(3)
  @IsDecimal({ decimal_digits: "2" })
  be?: number | null;

  /**
   * HCO3
   * @max_length 4
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(4)
  @IsDecimal({ decimal_digits: "2" })
  hco3?: number | null;

  /**
   * O2Sat
   * @max_length 4
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(4)
  @IsDecimal({ decimal_digits: "2" })
  o2sat?: number | null;

  /**
   * FIO2
   * @max_length 3
   * @decimal_places 2
   */
  @Column({ type: "decimal", default: null })
  @IsDecimal({ decimal_digits: "2" })
  @MaxLength(3)
  fio2?: number | null;

  /**
   * Respiration Rate
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int", name: "respiration_rate", default: null })
  @MaxLength(3)
  respirationRate?: number | null;

  /**
   * Tidal Volume
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(4)
  @IsDecimal({ decimal_digits: "2" })
  tv?: number | null;

  /**
   * PEEP
   * @max_length 3
   * @decimal_places 1
   */
  @Column({ type: "decimal", default: null })
  @MaxLength(3)
  @IsDecimal({ decimal_digits: "1" })
  peep?: number | null;

  /**
   * PiP
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int", default: null })
  @MaxLength(3)
  pip?: number | null;

  /**
   * Mode
   */
  @Column({ type: "enum", enum: Mode, default: null })
  @IsEnum(Mode)
  mode?: Mode | null;

  /**
   * The Id we use when we upload this to UNOS
   */
  @Column({ type: "uuid", name: "unos_record_id", default: null })
  @IsUUID()
  unosRecordId?: string;

  /**
   * The datetime this was resulted
   */
  @Column({ type: "timestamp" })
  @IsDate()
  datetime: Date;
}
