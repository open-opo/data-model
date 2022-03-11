import { BaseEntity } from "typeorm";
import { DiagnosticReport as DiagnosticReportType } from "./fhir/diagnosticReport";
import { Observation } from "./observation";
import { ReferralBase } from "./referral";
/**
 * DiagnosticReport
 */
export declare class DiagnosticReport extends BaseEntity {
    id: string;
    createdAt: Date;
    referralId: string;
    /**
     * The referral this applies to
     *
     * @ignore
     */
    referral: ReferralBase;
    resource: DiagnosticReportType;
    observations: Observation[];
}
