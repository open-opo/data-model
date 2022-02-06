import { IdentifierUse } from "./enums";
import { BaseTable } from "../../BaseTable";
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
export declare class Identifier extends BaseTable {
    /**
     * **Cardinality**:	0..1
     *
     * **Terminology Binding**:	{@link IdentifierUse} (Required)
     *
     * **Type**: [Code](https://hl7.org/fhir/datatypes.html#code)
     *
     * **Is Modifier**:	true (Reason: This is labeled as "Is Modifier" because applications should not mistake a temporary id for a permanent one.)
     *
     * **Requirements**: Allows the appropriate identifier for a particular context of use to be selected from among a set of identifiers.
     *
     * **Comments**: Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     *
     * https://hl7.org/fhir/datatypes-definitions.html#Identifier.use
     */
    use?: IdentifierUse;
}
