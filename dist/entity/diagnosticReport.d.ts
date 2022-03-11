import { BaseEntity } from "typeorm";
import { DiagnosticReport as DiagnosticReportType } from "./fhir/diagnosticReport";
import { Observation } from "./observation";
/**
 * DiagnosticReport
 */
export declare class DiagnosticReport extends BaseEntity {
    id: string;
    createdAt: Date;
    resource: DiagnosticReportType;
    observations: Observation[];
}
