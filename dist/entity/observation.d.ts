import { BaseEntity } from "typeorm";
import { DiagnosticReport } from "./diagnosticReport";
import { Observation as ObservationType } from "./fhir/observation";
/**
 * Culture
 */
export declare class Observation extends BaseEntity {
    /**
     * The referral this applies to
     * @format uuid
     */
    id: string;
    createdAt: Date;
    diagnosticReport: DiagnosticReport;
    resource: ObservationType;
}
