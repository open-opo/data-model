import {
  IsDate,
  IsDecimal,
  IsEnum,
  IsInt,
  IsUUID,
  MaxLength,
} from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ReferralBase } from "..";
import { BaseModel } from "./baseModel";

export enum Urinalysis_Color {
  Colorless = "Colorless",
  Straw = "Straw",
  Clear = "Clear",
  LightYellow = "Light Yellow",
  Yellow = "Yellow",
  DarkYellow = "Dark Yellow ",
  Amber = "Amber",
  LightOrange = "Light Orange",
  Orange = "Orange",
  DarkOrange = "Dark Orange",
  LightRed = "Light Red",
  Red = "Red",
  DarkRed = "Dark Red",
  LightBrown = "Light Brown",
  Brown = "Brown",
  DarkBrown = "Dark Brown",
  Pink = "Pink",
}

export enum Urinalysis_Appearance {
  Clear = "Clear",
  SlightlyCloudy = "Slightly Cloudy",
  Cloudy = "Cloudy",
  SlightlyHazy = "Slightly Hazy",
  Hazy = "Hazy",
  LightTurbid = "Light Turbid",
  Turbid = "Turbid",
}

export enum Urinalysis_Blood {
  Large = "Large",
  Moderate = "Moderate",
  Small = "Small",
  Trace = "Trace",
}

export enum Urinalysis_Bacteria {
  None = "None",
  Light = "Light",
  Moderate = "Moderate",
  Heavy = "Heavy",
}

export enum Urinalysis_Leukocyte {
  Trace = "Trace",
  Small = "Small",
  Moderate = "Moderate",
  Large = "Large",
}

/**
 * Urinalysis
 */
@Entity({ name: "urinalysis" })
export class UrinalysisBase extends BaseModel {
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

  @ManyToOne(() => ReferralBase, (x: ReferralBase) => x.urinalyses)
  @JoinColumn({ name: "referral_id" })
  referral: ReferralBase;

  /**
   * Color
   */
  @Column({ enum: Urinalysis_Color, type: "enum" })
  @IsEnum(Urinalysis_Color)
  color?: Urinalysis_Color;

  /**
   * Appearance
   */
  @Column({ enum: Urinalysis_Appearance, type: "enum" })
  @IsEnum(Urinalysis_Appearance)
  appearance?: Urinalysis_Appearance;

  /**
   * pH
   * @max_length 2
   * @decimal_places 1
   */
  @Column({ type: "decimal" })
  @MaxLength(2)
  @IsDecimal({ decimal_digits: "1" })
  ph?: number | null;

  /**
   * Specific Gravity
   * @max_length 5
   * @decimal_places 3
   */
  @Column({ type: "decimal", name: "specific_gravity" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "3" })
  specificGravity?: number | null;

  /**
   * Protein
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(3)
  @IsInt()
  protein?: number | null;

  /**
   * Glucose
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(3)
  @IsInt()
  glucose?: number | null;

  /**
   * Blood
   */
  @Column({ enum: Urinalysis_Blood, type: "enum" })
  @IsEnum(Urinalysis_Blood)
  blood?: Urinalysis_Blood;

  /**
   * Red Blood Cells
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  rbc?: number | null;

  /**
   * White Blood Cells
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  wbc?: number | null;

  /**
   * Ketones
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(3)
  @IsInt()
  ketones?: number | null;

  /**
   * Casts
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  casts?: number | null;

  /**
   * Bacteria
   */
  @Column({ enum: Urinalysis_Bacteria, type: "enum" })
  @IsEnum(Urinalysis_Bacteria)
  bacteria?: Urinalysis_Bacteria;

  /**
   * Epith
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  epith?: number | null;

  /**
   * Leukocyte
   */
  @Column({ enum: Urinalysis_Leukocyte, type: "enum" })
  @IsEnum(Urinalysis_Leukocyte)
  leukocyte?: Urinalysis_Leukocyte;

  /**
   * Albumin Creatinine Ratio
   * @max_length 5
   * @decimal_places 3
   */
  @Column({ type: "decimal" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "3" })
  acr?: number | null;

  /**
   * Urobilinogen
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  urobilinogen?: number | null;

  /**
   * Bilirubin
   * @max_length 4
   * @decimal_places 2
   */
  @Column({ type: "decimal" })
  @MaxLength(4)
  @IsDecimal({ decimal_digits: "2" })
  bilirubin?: number | null;

  /**
   * The Id that we will use when we submit this CBC to UNOS
   * @format uuid
   */
  @Column({ type: "uuid", name: "unos_record_id" })
  @IsUUID()
  unosRecordId?: string | null;

  /**
   * The datetime this was resulted
   */
  @Column({ type: "timestamp" })
  @IsDate()
  datetime: Date;
}
