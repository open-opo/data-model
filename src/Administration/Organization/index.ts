import {
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import {
  IsAlpha,
  IsEnum,
  IsInt,
  IsPhoneNumber,
  IsUUID,
  MaxLength,
  Min,
} from "class-validator";

import { BaseTable } from "../../BaseTable";
import { ContactPoint, Identifier } from "../../DataTypes";
// import { State, TimeZone } from "../../opocdmEnums";

@Entity()
export class OrganizationIdentifier extends Identifier {
  @ManyToOne(
    () => Organization,
    (organization) => organization.organizationIdentifiers
  )
  organization: Organization;
}

/**
 * **Definition**: A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 *
 * **Cardinality**:	0..*
 *
 * **Type**: [DomainResource](https://hl7.org/fhir/domainresource.html)
 *
 * **Requirements**: Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
 *
 * **Invariants**: **Defined on this element**
 *   __org-1__	__Rule__ - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`
 *
 * https://hl7.org/fhir/organization.html
 */
@Entity({ name: "organization" })
export class Organization extends BaseTable {
  /**
   * **Definition**: Identifier for the organization that is used to identify the organization across multiple disparate systems.
   *
   * **Note**:	This is a business identifier, not a resource identifier (see discussion)
   *
   * **Cardinality**:	0..*
   *
   * **Type**:	{@link Identifier}
   *
   * **Requirements**: Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
   *
   * **Invariants**: **Affect this element**
   *   org-1	__Rule__ - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`
   *
   * https://hl7.org/fhir/organization-definitions.html#Organization.identifier
   */
  @OneToMany(
    () => OrganizationIdentifier,
    (organizationIdentifier) => organizationIdentifier.organization
  )
  organizationIdentifiers: OrganizationIdentifier[];

  /**
   * **Definition**: Whether the organization's record is still in active use.
   *
   * **Note**:	This is a business identifier, not a resource identifier (see discussion)
   *
   * **Cardinality**:	0..1
   *
   * **Is Modifier**:	true (Reason: This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid)
   *
   * **Meaning if Missing**: This resource is generally assumed to be active if no value is provided for the active element
   *
   * **Requirements**: Need a flag to indicate a record is no longer to be used and should generally be hidden for the user in the UI.
   *
   * **Comments**: This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   *
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   *
   * https://hl7.org/fhir/organization-definitions.html#Organization.active
   */
  active: boolean;

  /**
   * **Definition**: A name associated with the organization.
   *
   * **Cardinality**:	0..1
   *
   * **Requirements**: Need to use the name as the label of the organization.
   *
   * **Comments**: If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   *
   * **Invariants**: **Affect this element**
   *   org-1	__Rule__ - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`
   *
   * https://hl7.org/fhir/organization-definitions.html#Organization.name
   */
  name: string;

  /**
   * **Definition**: A list of alternate names that the organization is known as, or was known as in the past.
   *
   * **Cardinality**:	0..1
   *
   * **Requirements**: Over time locations and organizations go through many changes and can be known by different names.
   *
   * For searching knowing previous names that the organization was known by can be very useful.
   *
   * **Comments**: There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   *
   * https://hl7.org/fhir/organization-definitions.html#Organization.alias
   */
  alias: string;

  /**
   * **Definition**: A list of alternate names that the organization is known as, or was known as in the past.
   *
   * **Cardinality**:	0..1
   *
   * **Requirements**: Over time locations and organizations go through many changes and can be known by different names.
   *
   * For searching knowing previous names that the organization was known by can be very useful.
   *
   * **Comments**: There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   *
   * https://hl7.org/fhir/organization-definitions.html#Organization.alias
   */
  telecom: ContactPoint;

  // /**
  //  * The official name for the organization
  //  * @max_length 100
  //  */
  // @Column({ name: "official_name", type: "varchar", length: 100 })
  // @MaxLength(100)
  // officialName: string;

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

  // Relationships
  // @OneToMany(() => Referral, (x) => x.referringOrganization)
  // referrals: Referral[];

  // @OneToMany(() => OrganizationUnit, (x) => x.organization)
  // units: OrganizationUnit[];
}
