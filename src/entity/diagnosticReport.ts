import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DiagnosticReport as DiagnosticReportType } from "./fhir/diagnosticReport";
import { Observation } from "./observation";

/**
 * DiagnosticReport
 */
@Entity({ name: "diagnostic_report" })
export class DiagnosticReport extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @Column({ type: "json" })
  resource: DiagnosticReportType;

  // @Column({ type: "jsonb", name: " resource_jsonb" })
  // resourceJsonB?: DiagnosticReportType;

  // Relationships
  @OneToMany(() => Observation, (x: Observation) => x.diagnosticReport)
  observations: Observation[];
}
