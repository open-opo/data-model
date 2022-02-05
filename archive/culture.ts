/* eslint-disable no-unused-vars */
import { IsDate, IsEnum, IsUUID, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "./baseModel";
import { Referral } from "./referral";

export enum Source {}

export enum Result {
  Positive = "Positive",
  Negative = "Negative",
  Inconclusive = "Inconclusive",
}

/**
 * Culture
 */
@Entity({ name: "culture" })
export class Culture extends BaseModel {
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
  @IsUUID()
  referralId: string;

  /**
   * The referral this applies to
   */
  @ManyToOne(() => Referral, (referral: Referral) => referral.cultures)
  @JoinColumn({ name: "referral_id" })
  referral: Referral;

  /**
   * Where the culture originated from
   */
  @Column({ enum: Source, type: "enum", default: null })
  @IsEnum(Source)
  source: Source;

  /**
   * The result
   */
  @Column({ enum: Result, type: "enum", default: null })
  @IsEnum(Result)
  result?: Result | null;

  /**
   * The result at 24 hours
   * @max_length 255
   */
  @Column({ type: "varchar", name: "result_at_24", length: 255, default: null })
  @MaxLength(255)
  resultAt24?: string | null;

  /**
   * The result at 48 hours
   * @max_length 255
   */
  @Column({ type: "varchar", name: "result_at_48", length: 255, default: null })
  @MaxLength(255)
  resultAt48?: string | null;

  /**
   * The final result
   * @max_length 255
   */
  @Column({
    type: "varchar",
    name: "result_at_final",
    length: 3000,
    default: null,
  })
  @MaxLength(255)
  resultAtFinal?: string | null;

  /**
   * The record Id that will be used when pushed to UNOS
   * @format uuid
   */
  @Column({ type: "uuid", name: "unos_record_id", default: null })
  @IsUUID()
  unosRecordId?: string | null;

  /**
   * Datetime of result
   */
  @Column({ type: "timestamp" })
  @IsDate()
  datetime: Date;
}
