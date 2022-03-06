// import { Column, Timestamp } from "typeorm";
// import { IsDate } from "class-validator";

// import { BaseTable } from "../BaseTable";

// export abstract class DiagnosticReportTable extends BaseTable {
//   /**
//    * @ignore
//    */
//   constructor() {
//     super();
//   }

//   /**
//    * The time or time-period the observed value is asserted as being true.
//    * For biological subjects - e.g. human patients - this is usually called
//    * the "physiologically relevant time". This is usually either the time of
//    * the procedure or of specimen collection, but very often the source of the
//    * date/time is not known, only the date/time itself.
//    *
//    * https://www.hl7.org/fhir/observation-definitions.html#Observation.effective_x_
//    */
//   @Column({ name: "effective_timestamp", type: "timestamp" })
//   @IsDate()
//   effectiveTimestamp: Timestamp;

//   // @ManyToOne(() => Referral, (referral: Referral) => referral.urinalyses)
//   // @JoinColumn({ name: "referral_id" })
//   // referral: Referral;

//   // /**
//   //  * The Id that we will use when we submit this CBC to UNOS
//   //  * @format uuid
//   //  */
//   // @Column({ name: "unos_record_id", type: "uuid" })
//   // @IsUUID()
//   // unosRecordId?: string | null;
// }
