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
export declare class ContactPoint {
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
    system: ContactPointSystem;
}
