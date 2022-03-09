/* eslint-disable no-unused-vars */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DiagnosticReport } from "./diagnosticReport";
import { Observation as ObservationType } from "./fhir/observation";

/**
 * Culture
 */
@Entity({ name: "observation" })
export class Observation extends BaseEntity {
  /**
   * The referral this applies to
   * @format uuid
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @ManyToOne(
    () => DiagnosticReport,
    (referral: DiagnosticReport) => referral.observations
  )
  @JoinColumn({ name: "diagnostic_id" })
  diagnosticReport: DiagnosticReport;

  @Column({ type: "json" })
  resource: ObservationType;
}
