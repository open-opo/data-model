import { Column, Entity, OneToMany, ManyToOne } from "typeorm";
import {
  IsBoolean,
  IsString,
  IsEnum,
  IsInt,
  IsPhoneNumber,
  IsUUID,
  MaxLength,
  Min,
  Matches,
} from "class-validator";

import { BaseTable } from "../../BaseTable";
import { ContactPoint, Identifier } from "../../DataTypes";
// import { State, TimeZone } from "../../opocdmEnums";

/**
 * *extends* - {@link Identifier}
 *
 * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.identifier)
 */
@Entity()
class OrganizationIdentifier extends Identifier {
  @ManyToOne(
    () => Organization,
    (organization) => organization.organizationIdentifiers
  )
  organization: Organization;
}

/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 *
 * *Requirements* - Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
 *
 * *Cardinality* - `0..*`
 *
 * *Type* - [FHIR - DomainResource](https://hl7.org/fhir/domainresource.html)
 *
 * > *Invariants* - Defined on this element [org-1] Rule - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`.
 *
 * [FHIR Reference](https://hl7.org/fhir/organization.html)
 */
@Entity({ name: "organization" })
export class Organization extends BaseTable {
  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems. (This is a business identifier, not a resource identifier)
   *
   * *Requirements* - Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
   *
   * *Cardinality* - `0..*`
   *
   * *Type* - {@link Identifier}
   *
   * > *Invariants* - Affect this element [org-1]	Rule - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`.
   *
   * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.identifier)
   */
  @OneToMany(
    () => OrganizationIdentifier,
    (organizationIdentifier) => organizationIdentifier.organization
  )
  organizationIdentifiers: OrganizationIdentifier[];

  /**
   * Whether the organization's record is still in active use. (This is a business identifier, not a resource identifier.)
   *
   * *Requirements* - Need a flag to indicate a record is no longer to be used and should generally be hidden for the user in the UI.
   *
   * *Comments* - This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   *
   * *Cardinality* - `0..1`
   *
   * *Is Modifier* - true (Reason: This element is labelled as a modifier because it is a status element that can indicate that a record should not be treated as valid)
   *
   * *Meaning if Missing* - This resource is generally assumed to be active if no value is provided for the active element
   *
   * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.active)
   */
  @IsBoolean()
  @Column({ name: "active", type: "boolean" })
  active: boolean;

  /**
   * A name associated with the organization.
   *
   *
   * *Requirements* - Need to use the name as the label of the organization.
   *
   * *Comments* - If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   *
   * *Cardinality* - 0..1
   *
   * > *Invariants* - Affect this element [org-1]	*Rule* - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`.
   *
   * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.name)
   *
   * @regex `[ \r\n\t\S]+`
   */
  @IsString()
  @Matches("[ \r\n\tS]+")
  @Column({ name: "name", type: "string" })
  name: string;

  /**
   * A list of alternate names that the organization is known as, or was known as in the past.
   *
   * *Requirements* - Over time locations and organizations go through many changes and can be known by different names. For searching knowing previous names that the organization was known by can be very useful.
   *
   * *Comments* - There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   *
   * *Cardinality* - `0..1`
   *
   * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.alias)
   *
   * @is_string
   * @max_length 64
   */
  @IsString()
  @Column({ name: "alias", type: "string" })
  alias?: string;

  /**
   * A list of alternate names that the organization is known as, or was known as in the past.
   *
   * *Requirements* - Over time locations and organizations go through many changes and can be known by different names.
   *
   * *Comments* - There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   *
   * *Cardinality* - `0..1`
   *
   * *DataType* - {@link ContactPoint}
   *
   * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.alias)
   */
  telecom: ContactPoint;

  /**
   * 	An address for the organization.
   *
   * *Requirements* - Need to be able to track the hierarchy of organizations within an organization.
   *
   * *Comments* - There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   *
   * *Cardinality* - `0..*`
   *
   * *Hierarchy* - This reference is part of a strict Hierarchy [Hierarchy](https://hl7.org/fhir/references.html#circular)
   *
   * *DataType* - {@link Address}
   *
   * > *Invariants* - Defined on this element [org-2]	*Rule* - An address of an organization can never be of use 'home'	`where(use = 'home').empty()` *Affect this element*
   *
   * [FHIR Reference](https://hl7.org/fhir/organization-definitions.html#Organization.address)
   */
  address: Address;

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
