import { CodeableConcept, Reference } from "fhir/r4";

export interface DiagnosticReport {
  /** Resource Type Name (for serialization) */
  resourceType: "Observation";

  /**
   * A code or name that describes this diagnostic report.
   */
  code: CodeableConcept;

  effectiveDateTime?: string | undefined;

  status:
    | "registered"
    | "partial"
    | "preliminary"
    | "final"
    | "amended"
    | "corrected"
    | "appended"
    | "cancelled"
    | "entered-in-error"
    | "unknown";

  /**
   * The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources.
   */
  subject?: Reference | undefined;

  /**
   * Observations can contain observations.
   */
  result?: Reference[] | undefined;
}
