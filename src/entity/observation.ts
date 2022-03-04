/* eslint-disable no-unused-vars */
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./baseModel";
import { DiagnosticReport } from "./diagnosticReport";

/**
 * Culture
 */
@Entity({ name: "observation" })
export class Observation extends BaseModel {
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

  @ManyToOne(() => DiagnosticReport)
  @JoinColumn({ name: "diagnostic_id" })
  diagnosticReport: DiagnosticReport;

  @Column({ type: "json" })
  resource: JSON;
}
