"use strict";
// import { Entity, Column, Timestamp, ManyToOne, JoinColumn } from "typeorm";
// import { IsDate, MaxLength, IsDecimal, IsEnum } from "class-validator";
// import { BaseTable } from "../../BaseTable";
// import { Mode } from "./enums";
// // import { Referral } from "../Referral";
// /**
//  * # Arterial Blood Gas
//  *
//  * There will be a Arterial Blood Gas for each draw, so a {@link Referral}s will have multiple ABGs
//  *
//  * Standard links:
//  * {@link BaseTable} or {@linkplain BaseTable} or [[Foo]]
//  *
//  *
//  * Citation: https://en.wikipedia.org/wiki/Arterial_blood_gas_test
//  */
// @Entity({ name: "abg" })
// export class Abg extends BaseTable {
//   /**
//    * (HCO3) is the amount of bicarbonate in the blood
//    *
//    * "The HCO3 ion indicates whether a metabolic problem is present (such as ketoacidosis).
//    * A low HCO indicates metabolic acidosis, a high HCO indicates metabolic alkalosis. As this
//    * value when given with blood gas results is often calculated by the analyzer, correlation
//    * should be checked with total CO2 levels as directly measured"
//    *
//    * https://en.wikipedia.org/wiki/Arterial_blood_gas_test#Parameters_and_reference_ranges
//    *
//    * @max_length 4
//    * @decimal_places 2
//    */
//   @Column({ type: "decimal", precision: 4, scale: 2 })
//   @MaxLength(4)
//   @IsDecimal({ decimal_digits: "2" })
//   hco3?: number;
//   /**
//    * (ph) is the acidity of the blood
//    * The pH or H+ indicates if a person is acidemic (pH < 7.35; H+ >45) or alkalemic (pH > 7.45; H+ < 35).
//    *
//    * https://en.wikipedia.org/wiki/Arterial_blood_gas_test#pH
//    *
//    * @max_length 4
//    * @decimal_places 2
//    */
//   @Column({ type: "decimal" })
//   @MaxLength(4)
//   @IsDecimal({ decimal_digits: "2" })
//   ph?: number;
//   /**
//    *
//    * (PaCO2) is the partial pressure of carbon dioxide in the blood.
//    *
//    * The carbon dioxide partial pressure (PaCO2) is an indicator of CO2 production and
//    * elimination: for a constant metabolic rate, the PaCO2 is determined entirely by its
//    * elimination through ventilation. A high PaCO2 (respiratory acidosis, alternatively
//    * hypercapnia) indicates underventilation (or, more rarely, a hypermetabolic disorder),
//    * a low PaCO2 (respiratory alkalosis, alternatively hypocapnia) hyper- or overventilation.
//    *
//    * https://en.wikipedia.org/wiki/PCO2
//    *
//    * @max_length 5
//    * @decimal_places 2
//    */
//   @Column({ type: "decimal", precision: 5, scale: 2 })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "2" })
//   pco2?: number;
//   /**
//    * @max_length 3
//    * @decimal_places 2
//    */
//   @Column({ type: "decimal" })
//   @MaxLength(3)
//   @IsDecimal({ decimal_digits: "2" })
//   be?: number;
//   /**
//    * Oxygen Saturation (O2SAT) is a measure of the oxygen saturation of the blood.
//    *
//    * This is the sum of oxygen dissolved in plasma and chemically bound to hemoglobin as determined
//    * by the calculation: CaO2 = (PaO2 × 0.003) + (SaO2 × 1.34 × Hgb) where hemoglobin concentration
//    * is expressed in g/dL.
//    *
//    * https://en.wikipedia.org/wiki/Arterial_blood_gas_test#Parameters_and_reference_ranges
//    *
//    * @max_length 4
//    * @decimal_places 2
//    */
//   @Column({ type: "decimal" })
//   @MaxLength(4)
//   @IsDecimal({ decimal_digits: "2" })
//   o2sat?: number;
//   /**
//    * Fraction of inspired oxygen (FiO2) is the fraction of inspired oxygen in the blood
//    *
//    * https://en.wikipedia.org/wiki/Fraction_of_inspired_oxygen
//    *
//    * @max_length 3
//    * @decimal_places 2
//    */
//   @Column({ type: "decimal" })
//   @IsDecimal({ decimal_digits: "2" })
//   @MaxLength(3)
//   fio2?: number;
//   /**
//    * Respiration Rate is the number of breaths per minute
//    * @max_length 3
//    * @decimal_places 0
//    */
//   @Column({ name: "respiration_rate", type: "int", precision: 3 })
//   @MaxLength(3)
//   respirationRate?: number;
//   /**
//    * Tidal Volume
//    *
//    * @max_length 4
//    * @decimal_places 2
//    */
//   @Column({ name: "tv", type: "decimal", precision: 4, scale: 2 })
//   @MaxLength(4)
//   @IsDecimal({ decimal_digits: "2" })
//   tv?: number;
//   /**
//    * PEEP is the positive end expiration pressure of the patient
//    *
//    * @max_length 3
//    * @decimal_places 1
//    */
//   @Column({ type: "decimal" })
//   @MaxLength(3)
//   @IsDecimal({ decimal_digits: "1" })
//   peep?: number;
//   /**
//    * PiP is the positive end inspiratory pressure of the patient
//    *
//    * @max_length 3
//    * @decimal_places 0
//    */
//   @Column({ type: "int" })
//   @MaxLength(3)
//   pip?: number;
//   /**
//    * Mode
//    */
//   @Column({ type: "enum", enum: Mode })
//   @IsEnum(Mode)
//   mode?: Mode;
//   /**
//    * The datetime this was resulted
//    */
//   @Column({ name: "result_timestamp", type: "timestamp" })
//   @IsDate()
//   resultTimestamp: Timestamp;
//   // /**
//   //  * The  {@link BaseTable} referral this applies to
//   //  *
//   //  */
//   // @ManyToOne(() => Referral, (referral: Referral) => referral.abgs)
//   // @JoinColumn({ name: "referral_id" })
//   // referral: Referral;
// }
