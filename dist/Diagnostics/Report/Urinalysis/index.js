"use strict";
// import { Column, Entity } from "typeorm";
// import { IsDecimal, IsEnum, IsInt, MaxLength } from "class-validator";
// import { DiagnosticReportTable } from "../DiagnosticReportTable";
// // import { Referral } from "./Referral";
// import { Appearance, Bacteria, Blood, Color, Leukocyte } from "./enums";
// /**
//  * # Urinalysis
//  *
//  *  [ToDo] Definition of the Urinalysis table
//  *
//  * Parent: {@link DiagnosticTDiagnosticReportTableable}
//  *
//  *
//  * [ToDo] Citation:
//  */
// @Entity({ name: "urinalysis" })
// export class Urinalysis extends DiagnosticReportTable {
//   /**
//    * Albumin Creatinine Ratio is the ratio of albumin to creatinine
//    *
//    * @max_length 5
//    * @decimal_places 3
//    */
//   @Column({ name: "acr", type: "decimal" })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "3" })
//   acr?: number;
//   /**
//    * Appearance of the urine
//    */
//   @Column({ name: "apperance", type: "enum", enum: Appearance })
//   @IsEnum(Appearance)
//   appearance?: Appearance;
//   /**
//    * Color of the urine
//    */
//   @Column({ name: "color", enum: Color, type: "enum" })
//   @IsEnum(Color)
//   color?: Color;
//   /**
//    * pH is the acidity of the urine
//    *
//    */
//   @MaxLength(2)
//   @IsDecimal({ decimal_digits: "1" })
//   @Column({ name: "ph", type: "decimal" })
//   ph?: number | null;
//   /**
//    * Specific Gravity is the density of the urine
//    *
//    * @max_length 5
//    * @decimal_places 3
//    */
//   @Column({ name: "specific_gravity", type: "decimal", precision: 5, scale: 3 })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "3" })
//   specificGravity?: number | null;
//   /**
//    * Protein is the amount of protein in the urine
//    *
//    * @max_length 3
//    * @decimal_places 0
//    */
//   @Column({ type: "int" })
//   @MaxLength(3)
//   @IsInt()
//   protein?: number | null;
//   /**
//    * Glucose is the amount of glucose in the urine
//    *
//    * @max_length 3
//    * @decimal_places 0
//    */
//   @Column({ name: "glucose", type: "int", precision: 3 })
//   @MaxLength(3)
//   @IsInt()
//   glucose?: number;
//   /**
//    * Blood is the color of the blood in the urine
//    *
//    */
//   @Column({ enum: Blood, type: "enum" })
//   @IsEnum(Blood)
//   blood?: Blood;
//   /**
//    * Red Blood Cells is the number of red blood cells in the urine
//    *
//    * @max_length 5
//    * @decimal_places 2
//    */
//   @Column({ name: "rbc", type: "decimal", precision: 5, scale: 2 })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "2" })
//   rbc?: number;
//   /**
//    * White Blood Cells is the number of white blood cells in the urine
//    *
//    * @max_length 5
//    * @decimal_places 2
//    */
//   @Column({ name: "wbc", type: "decimal", precision: 5, scale: 2 })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "2" })
//   wbc?: number;
//   /**
//    * Ketones is the ketones in the urine
//    *
//    * @max_length 3
//    * @decimal_places 0
//    */
//   @Column({ name: "ketones", type: "int", precision: 3 })
//   @MaxLength(3)
//   @IsInt()
//   ketones?: number | null;
//   /**
//    * Casts is the number of white blood cells in the urine
//    *
//    * @max_length 5
//    * @decimal_places 2
//    */
//   @Column({ name: "casts", type: "decimal", precision: 5, scale: 2 })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "2" })
//   casts?: number;
//   /**
//    * Bacteria is the presence of bacteria in the urine
//    */
//   @Column({ enum: Bacteria, type: "enum" })
//   @IsEnum(Bacteria)
//   bacteria?: Bacteria;
//   /**
//    * Epith is the amount of white blood cells in the urine
//    *
//    * @max_length 5
//    * @decimal_places 2
//    */
//   @Column({ name: "epith", type: "decimal", precision: 5, scale: 2 })
//   @MaxLength(5)
//   @IsDecimal({ decimal_digits: "2" })
//   epith?: number;
//   /**
//    * Leukocyte is the number of white blood cells in the urine
//    *
//    */
//   @Column({ enum: Leukocyte, type: "enum" })
//   @IsEnum(Leukocyte)
//   leukocyte?: Leukocyte;
//   /**
//    * Urobilinogen is the amount of urobilinogen in the urine
//    *
//    * @max_length 5
//    * @decimal_places 2
//    */
//   @Column({ name: "urobilinogen", type: "decimal", precision: 5, scale: 2 })
//   @IsDecimal({ decimal_digits: "2" })
//   @MaxLength(5)
//   urobilinogen?: number;
//   /**
//    * Bilirubin is the amount of red blood cells in the urine
//    *
//    * https://en.wikipedia.org/wiki/Bilirubin#Blood_tests
//    *
//    * @max_length 4
//    * @decimal_places 2
//    */
//   @Column({ name: "bilirubin", type: "decimal", precision: 4, scale: 2 })
//   @IsDecimal({ decimal_digits: "2" })
//   @MaxLength(4)
//   bilirubin?: number;
// }
