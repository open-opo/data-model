"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPointSystem = void 0;
/**
 * Identifier for the organization that is used to identify the organization across multiple disparate systems.
 *
 * https://hl7.org/fhir/valueset-contact-point-system.html
 *
 * @enum
 */
var ContactPointSystem;
(function (ContactPointSystem) {
    /**
     * The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    ContactPointSystem["PHONE"] = "Phone";
    /**
     * The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    ContactPointSystem["FAX"] = "Fax";
    /**
     * The value is an email address.
     */
    ContactPointSystem["EMAIL"] = "Email";
    /**
     * The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    ContactPointSystem["PAGER"] = "Pager";
    /**
     * 	A contact that is not a phone, fax, pager or email address and is expressed as a URL. This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    ContactPointSystem["URL"] = "URL";
    /**
     * 	A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
     */
    ContactPointSystem["SMS"] = "SMS";
    /**
     * 	A contact that is not a phone, fax, page or email address and is not expressible as a URL. E.g. Internal mail address. This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.) Extensions may be used to distinguish "other" contact types.
     */
    ContactPointSystem["OTHER"] = "Other";
})(ContactPointSystem = exports.ContactPointSystem || (exports.ContactPointSystem = {}));
