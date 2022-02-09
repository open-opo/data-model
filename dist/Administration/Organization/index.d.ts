import { BaseTable } from "../../BaseTable";
import { ContactPoint, Identifier } from "../../DataTypes";
export declare class OrganizationIdentifier extends Identifier {
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
export declare class Organization extends BaseTable {
    /**
     * **Definition**: Identifier for the organization that is used to identify the organization across multiple disparate systems.
     *
     * **Note**:	This is a business identifier, not a resource identifier (see discussion)
     *
     * **Cardinality**:	0..*
     *
     * **Type**: {@linkplain Identifier}
     *
     * **Requirements**: Organizations are known by a variety of ids. Some institutions maintain several, and most collect identifiers for exchange with other organizations concerning the organization.
     *
     * **Invariants**: **Affect this element**
     *   org-1	__Rule__ - The organization SHALL at least have a name or an identifier, and possibly more than one	`(identifier.count() + name.count()) > 0`
     *
     * https://hl7.org/fhir/organization-definitions.html#Organization.identifier
     */
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
     *
     * @max_length 3
     * @decimal_places 0
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
     *
     * @max_length 64
     * @regex [ \r\n\t\S]+
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
     *
     * @max_length 64
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
}
