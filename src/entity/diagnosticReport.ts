import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./baseModel";
import { Observation } from "./observation";

export enum Result {
  Positive = "Positive",
  Negative = "Negative",
  Inconclusive = "Inconclusive",
}

/**
 * Culture
 */
@Entity({ name: "diagnostic_report" })
export class DiagnosticReport extends BaseModel {
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
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  observations: Observation[];
}
