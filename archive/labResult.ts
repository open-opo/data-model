import { IsDate, IsDecimal, IsInt, IsUUID, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "./baseModel";
import { Referral } from "./referral";

/**
 * Represents a Lab Result
 *
 * There will be a Lab Result for each draw, so a referral will have multiple Labs
 */
@Entity({ name: "lab_result" })
export class LabResult extends BaseModel {
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
  @ManyToOne(() => Referral, (referral: Referral) => referral.labResults)
  @JoinColumn({ name: "referral_id" })
  referral: Referral;

  /**
   * Sodium
   * @max_length 4
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(4)
  @IsInt()
  na?: number | null;

  /**
   * Potassium
   * @max_length 2
   * @decimal_places 1
   */
  @Column({ type: "decimal" })
  @MaxLength(2)
  @IsDecimal({ decimal_digits: "1" })
  k?: number | null;

  /**
   * Cardiac Index
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(3)
  @IsInt()
  ci?: number | null;

  /**
   * Carbon Dioxide
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(3)
  @IsInt()
  co2?: number | null;

  /**
   * Blood Urea Nitrogen
   * @max_length 3
   * @decimal_places 0
   */
  @Column({ type: "int" })
  @MaxLength(3)
  @IsInt()
  bun?: number | null;

  /**
   * Creatinine
   * @max_length 3
   * @decimal_places 1
   */
  @Column({ type: "decimal" })
  @MaxLength(3)
  @IsDecimal({ decimal_digits: "1" })
  creatinine?: number | null;

  /**
   * Creatinine Clearance
   * @max_length 5
   * @decimal_places 2
   */
  @Column({ type: "decimal", name: "creatinine_clearance" })
  @MaxLength(5)
  @IsDecimal({ decimal_digits: "2" })
  creatinineClearance?: number | null;

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
   * Calcium
   * @max_length 3
   * @decimal_places 1
   */
  @Column({ type: "decimal" })
  @MaxLength(3)
  @IsDecimal({ decimal_digits: "1" })
  calcium?: number | null;

  /**
   * Ionized Calcium
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "ionized_calcium" })
  ionizedCalcium?: number | null;

  /**
   * Magnesium
   * @max_length 3
   * @decimal_places 1
   */
  @Column({ type: "decimal" })
  @MaxLength(3)
  @IsDecimal({ decimal_digits: "1" })
  mg?: number | null;

  /**
   * Phosphorus
   * @max_length 3
   * @decimal_places 1
   */
  @Column({ type: "decimal" })
  @MaxLength(3)
  @IsDecimal({ decimal_digits: "1" })
  phosphorus?: number | null;

  /**
   * Lactate
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  lactate?: number | null;

  /**
   * Total Bilirubin
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "total_bilirubin" })
  totalBilirubin?: number | null;

  /**
   * Direct Bilirubin
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "direct_bilirubin" })
  directBilirubin?: number | null;

  /**
   * Indirect Bilirubin
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "indirect_bilirubin" })
  indirectBilirubin?: number | null;

  /**
   * AST (SGOT)
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  ast?: number | null;

  /**
   * ALT (SGPT)
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  alt?: number | null;

  /**
   * Alkaline Phosphatase
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  alp?: number | null;

  /**
   * Gamma-Glutamyl Transferase
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  ggt?: number | null;

  /**
   * Albumin
   * @max_length TBD
   * @decimal_places 0
   */
  @Column({ type: "int" })
  albumin?: number | null;

  /**
   * Total Protein
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  totalProtein?: number | null;

  /**
   * Lactate Dehydrogenase
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  ldh?: number | null;

  /**
   * Prothrombin Time
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  pt?: number | null;

  /**
   * International Normalized Ratio
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  inr?: number | null;

  /**
   * Partial Thromboplastin Time
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  ptt?: number | null;

  /**
   * Creatine Kinase MB
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  ckmb?: number | null;

  /**
   * Creatine Phosphokinase
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  cpk?: number | null;

  /**
   * Creatine Phosphokinase Index
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "cpk_index" })
  cpkIndex?: number | null;

  /**
   * Total MB
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "total_mb" })
  totalMB?: number | null;

  /**
   * Troponin-I
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "troponin_i" })
  troponinI?: number | null;

  /**
   * Troponin-T
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "troponin-t" })
  troponinT?: number | null;

  /**
   * Amylase
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  amylase?: number | null;

  /**
   * Lipase
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  lipase?: number | null;

  /**
   * Lipase ULN
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "lipase_uln" })
  lipaseULN?: number | null;

  /**
   * Hemoglobin A1c
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  a1c?: number | null;

  /**
   * BNP
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  bnp?: number | null;

  /**
   * Serum Osmolality
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal", name: "serum_osolality" })
  serumOsmolality?: number | null;

  /**
   * Serum Beta HCG
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ name: "serum_beta_hcg", type: "decimal" })
  serumBetaHCG?: number | null;

  /**
   * Fibrinogen
   * @max_length TBD
   * @decimal_places TBD
   */
  @Column({ type: "decimal" })
  fibrinogen?: number | null;

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
