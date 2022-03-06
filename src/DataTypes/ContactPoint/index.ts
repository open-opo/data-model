import { Column, Entity, OneToMany } from "typeorm";
import {
  IsAlpha,
  IsEnum,
  IsInt,
  IsPhoneNumber,
  MaxLength,
  Min,
} from "class-validator";

import { BaseTable } from "../../BaseTable";
import { ContactPointSystem } from "./enums";

/**
 * **Definition**: An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 *
 * **Cardinality**:	0..*
 *
 * **Type**:	Element
 *
 * **Requirements**: Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *
 * https://hl7.org/fhir/datatypes.html#Identifier
 */
@Entity({ name: "contact_point" })
export class ContactPoint extends BaseTable {
  /**
   * **Definition**: Telecommunications form for contact point - what communications system is required to make use of the contact.
   *
   * **Cardinality**:	0..1
   *
   * **Terminology Binding**:	{@link ContactPointSystem} (Required)
   *
   * **Type**: [Code](https://hl7.org/fhir/datatypes.html#code)
   *
   * **Invariants**: **Affect this element**
   *   __cpt-2__	__Rule__: A system is required if a value is provided.	`value.empty() or system.exists()`
   *
   * https://hl7.org/fhir/datatypes-definitions.html#ContactPoint.system
   */
  @Column({
    name: "system",
    type: "enum",
    enum: ContactPointSystem,
  })
  @IsEnum(ContactPointSystem)
  system: ContactPointSystem;

  // /**
  //  * The short name for the organization
  //  * @max_length 25
  //  */
  // @Column({ name: "short_name", type: "varchar", length: 25, default: null })
  // @MaxLength(25)
  // shortName?: string | null;

  // /**
  //  * The policies and procedures for the organization
  //  * This informs a person how to interact with organization
  //  * @max_length 5000
  //  */
  // @Column({
  //   name: "policies_and_procedures",
  //   type: "varchar",
  //   length: 5000,
  //   default: null,
  // })
  // @MaxLength(5000)
  // policiesAndProcedures?: string | null;

  // /**
  //  * The count of beds
  //  * @max_length 5
  //  * @decimal_places 0
  //  * @minimum 1
  //  */
  // @Column({ name: "bed_count", type: "int", default: null })
  // @Min(1)
  // @IsInt()
  // bedCount?: number | null;

  // /**
  //  * The unique code used to identify organizations
  //  * @max_length 4
  //  */
  // @Column({ type: "varchar", length: 4, default: null })
  // @MaxLength(4)
  // @IsAlpha()
  // code?: string | null;

  // /**
  //  * The Organization's Address Line 1
  //  * @max_length 50
  //  */
  // @Column({ name: "address_1", type: "varchar", length: 50, default: null })
  // @MaxLength(50)
  // address1?: string | null;

  // /**
  //  * The Organization's Address Line 2
  //  * @max_length 50
  //  */
  // @Column({ name: "address_2", type: "varchar", length: 50, default: null })
  // @MaxLength(50)
  // address2?: string | null;

  // /**
  //  * The Organization's City
  //  * @max_length 50
  //  */
  // @Column({ type: "varchar", length: 50, default: null })
  // @MaxLength(50)
  // city?: string | null;

  // /**
  //  * The Organization's State
  //  */
  // @Column({ name: "state", enum: State, type: "enum", default: null })
  // @IsEnum(State)
  // state?: State | null;

  // /**
  //  * The Organization's County
  //  * @max_length 50
  //  */
  // @Column({ type: "varchar", length: 50, default: null })
  // @MaxLength(50)
  // county?: string | null;

  // /**
  //  * The Organization's Postal Code
  //  * @max_length 15
  //  */
  // @Column({ name: "postal_code", type: "varchar", length: 15, default: null })
  // @MaxLength(15)
  // postalCode?: string | null;

  // /**
  //  * The Organization's Primary Timezone
  //  */
  // @Column({ name: "timezone", enum: TimeZone, type: "enum", default: null })
  // @IsEnum(TimeZone)
  // timezone?: TimeZone | null;

  // /**
  //  * National Provider Index
  //  * @max_length 15
  //  */
  // @Column({ type: "varchar", length: 15, default: null })
  // @MaxLength(15)
  // npi?: string | null;

  // /**
  //  * CMS Id
  //  * @max_length 15
  //  */
  // @Column({ type: "varchar", length: 15, default: null })
  // @MaxLength(15)
  // cmsId?: string | null;

  // /**
  //  * Phone Number
  //  * @pattern ^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$
  //  */
  // @Column({ type: "varchar", length: 15, default: null })
  // @MaxLength(15)
  // @IsPhoneNumber()
  // phone?: string | null;

  // /**
  //  * Fax Number
  //  * @pattern ^([+]?d{1,2}[-s]?|)d{3}[-s]?d{3}[-s]?d{4}$
  //  */
  // @Column({ type: "varchar", length: 15, default: null })
  // @MaxLength(15)
  // @IsPhoneNumber()
  // fax?: string | null;

  // // Relationships
  // @OneToMany(() => Referral, (x) => x.referringOrganization)
  // referrals: Referral[];

  // @OneToMany(() => OrganizationUnit, (x) => x.organization)
  // units: OrganizationUnit[];
}
