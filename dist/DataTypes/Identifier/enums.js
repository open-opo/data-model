"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierUse = void 0;
/**
 * Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *
 * FHIR Type: Code (https://hl7.org/fhir/datatypes.html#code)
 * Source: https://hl7.org/fhir/organization-definitions.html#Organization.identifier
 *
 * @enum
 */
var IdentifierUse;
(function (IdentifierUse) {
    /**
     * The identifier recommended for display and use in real-world interactions.
     */
    IdentifierUse["USUAL"] = "Usual";
    /**
     * The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    IdentifierUse["OFFICIAL"] = "Official";
    /**
     * A temporary identifier.
     */
    IdentifierUse["TEMP"] = "Temp";
    /**
     * An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    IdentifierUse["SECONDARY"] = "Secondary";
    /**
     * 	The identifier id no longer considered valid, but may be relevant for search purposes. E.g. Changes to identifier schemes, account merges, etc.
     */
    IdentifierUse["OLD"] = "Old";
})(IdentifierUse = exports.IdentifierUse || (exports.IdentifierUse = {}));
