import { IsUUID } from "class-validator";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DiagnosticReport as DiagnosticReportType } from "./fhir/diagnosticReport";
import { Observation } from "./observation";
import { ReferralBase } from "./referral";

/**
 * DiagnosticReport
 */
@Entity({ name: "diagnostic_report" })
export class DiagnosticReport extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @Column({ nullable: true, type: "uuid", name: "referral_id" })
  @IsUUID()
  referralId: string;

  /**
   * The referral this applies to
   *
   * @ignore
   */
  @ManyToOne(
    () => ReferralBase,
    (referral: ReferralBase) => referral.diagnosticReports
  )
  @JoinColumn({ name: "referral_id" })
  referral: ReferralBase;

  @Column({ type: "json" })
  resource: DiagnosticReportType;

  // @Column({ type: "jsonb", name: " resource_jsonb" })
  // resourceJsonB?: DiagnosticReportType;

  // Relationships
  @OneToMany(() => Observation, (x: Observation) => x.diagnosticReport)
  observations: Observation[];
}
