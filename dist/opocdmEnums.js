"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrySource = exports.RegistryStatus = exports.TimeZone = exports.CircumstanceOfDeath = exports.Sex = exports.Race = exports.Credentials = exports.State = void 0;
/* eslint-disable no-unused-vars */
/**
 * Geographical States
 */
var State;
(function (State) {
    State["AL"] = "AL";
    State["AK"] = "AK";
    State["AS"] = "AS";
    State["AZ"] = "AZ";
    State["AR"] = "AR";
    State["CA"] = "CA";
    State["CO"] = "CO";
    State["CT"] = "CT";
    State["DE"] = "DE";
    State["DC"] = "DC";
    State["FL"] = "FL";
    State["GA"] = "GA";
    State["GU"] = "GU";
    State["HI"] = "HI";
    State["ID"] = "ID";
    State["IL"] = "IL";
    State["IN"] = "IN";
    State["IA"] = "IA";
    State["KS"] = "KS";
    State["KY"] = "KY";
    State["LA"] = "LA";
    State["ME"] = "ME";
    State["MD"] = "MD";
    State["MA"] = "MA";
    State["MI"] = "MI";
    State["MN"] = "MN";
    State["MS"] = "MS";
    State["MO"] = "MO";
    State["MT"] = "MT";
    State["NE"] = "NE";
    State["NV"] = "NV";
    State["NH"] = "NH";
    State["NJ"] = "NJ";
    State["NM"] = "NM";
    State["NY"] = "NY";
    State["NC"] = "NC";
    State["ND"] = "ND";
    State["MP"] = "MP";
    State["OH"] = "OH";
    State["OK"] = "OK";
    State["OR"] = "OR";
    State["PA"] = "PA";
    State["PR"] = "PR";
    State["RI"] = "RI";
    State["SC"] = "SC";
    State["SD"] = "SD";
    State["TN"] = "TN";
    State["TX"] = "TX";
    State["UT"] = "UT";
    State["VT"] = "VT";
    State["VA"] = "VA";
    State["VI"] = "VI";
    State["WA"] = "WA";
    State["WV"] = "WV";
    State["WI"] = "WI";
    State["WY"] = "WY";
})(State = exports.State || (exports.State = {}));
/**
 * Credentials a person might have
 */
var Credentials;
(function (Credentials) {
    Credentials["MD"] = "MD";
    Credentials["RN"] = "RN";
    Credentials["PA"] = "PA";
    Credentials["Chap"] = "Chap";
    Credentials["SocialWorker"] = "SocialWorker";
    Credentials["LVN"] = "LVN";
    Credentials["NP"] = "NP";
    Credentials["DO"] = "DO";
    Credentials["UnitClerk"] = "UnitClerk";
})(Credentials = exports.Credentials || (exports.Credentials = {}));
/**
 * Race
 *
 * @default Unknown
 */
var Race;
(function (Race) {
    /**
     * American Indian or Alaskan Native descent
     */
    Race["AmericanIndianOrAlaskaNative"] = "American Indian or Alaska Native";
    Race["Asian"] = "Asian";
    Race["BlackOrAfricanAmerican"] = "Black Or African American";
    Race["HispanicOrLatino"] = "Hispanic Or Latino";
    Race["NativeHawaiianOrOtherPacificIslander"] = "Native Hawaiian Or Other Pacific Islander";
    Race["White"] = "White";
    Race["Unknown"] = "Unknown";
})(Race = exports.Race || (exports.Race = {}));
/**
 * Sex is one of "Male", "Female", "Unknown"
 *
 *
 * @default Unknown if not Male or Female.
 */
var Sex;
(function (Sex) {
    Sex["Male"] = "Male";
    Sex["Female"] = "Female";
    Sex["Unknown"] = "Unknown";
})(Sex = exports.Sex || (exports.Sex = {}));
/**
 * The Circumstance of Death
 */
var CircumstanceOfDeath;
(function (CircumstanceOfDeath) {
    CircumstanceOfDeath["MVA"] = "MVA";
    CircumstanceOfDeath["Suicide"] = "Suicide";
    CircumstanceOfDeath["Homicide"] = "Homicide";
    CircumstanceOfDeath["ChildAbuse"] = "Child Abuse";
    CircumstanceOfDeath["AccidentNonMVA"] = "Accident, Non-MVA";
    CircumstanceOfDeath["NaturalCauses"] = "Natural Causes";
    CircumstanceOfDeath["NoneOfTheAbove"] = "None Of The Above";
})(CircumstanceOfDeath = exports.CircumstanceOfDeath || (exports.CircumstanceOfDeath = {}));
var TimeZone;
(function (TimeZone) {
    TimeZone["EST"] = "Eastern Standard Time";
    TimeZone["CST"] = "Central Standard Time";
    TimeZone["MST"] = "Mountain Standard Time";
    TimeZone["PST"] = "Pacific Standard Time";
    TimeZone["AKST"] = "Alaskan Standard Time";
    TimeZone["HST"] = "Hawaiian Standard Time";
    TimeZone["AWST"] = "West Australia Standard Time";
    TimeZone["CAST"] = "Central Australia Standard Time";
    TimeZone["AEST"] = "East Australia Standard Time";
})(TimeZone = exports.TimeZone || (exports.TimeZone = {}));
/**
 * A persons registry status
 */
var RegistryStatus;
(function (RegistryStatus) {
    RegistryStatus["NotRegistered"] = "Not Registered";
    RegistryStatus["NotAvailable"] = "Not Available";
    RegistryStatus["RegisteredYes"] = "Registered Yes";
    RegistryStatus["RegisteredNo"] = "Registered No";
})(RegistryStatus = exports.RegistryStatus || (exports.RegistryStatus = {}));
/**
 * A persons registry source
 */
var RegistrySource;
(function (RegistrySource) {
    RegistrySource["ALRegistry"] = "AL Registry";
    RegistrySource["AKRegistry"] = "AK Registry";
    RegistrySource["ASRegistry"] = "AS Registry";
    RegistrySource["AZRegistry"] = "AZ Registry";
    RegistrySource["ARRegistry"] = "AR Registry";
    RegistrySource["CARegistry"] = "CA Registry";
    RegistrySource["CORegistry"] = "CO Registry";
    RegistrySource["CTRegistry"] = "CT Registry";
    RegistrySource["DERegistry"] = "DE Registry";
    RegistrySource["DCRegistry"] = "DC Registry";
    RegistrySource["FLRegistry"] = "FL Registry";
    RegistrySource["GARegistry"] = "GA Registry";
    RegistrySource["GURegistry"] = "GU Registry";
    RegistrySource["HIRegistry"] = "HI Registry";
    RegistrySource["IDRegistry"] = "ID Registry";
    RegistrySource["ILRegistry"] = "IL Registry";
    RegistrySource["INRegistry"] = "IN Registry";
    RegistrySource["IARegistry"] = "IA Registry";
    RegistrySource["KSRegistry"] = "KS Registry";
    RegistrySource["KYRegistry"] = "KY Registry";
    RegistrySource["LARegistry"] = "LA Registry";
    RegistrySource["MERegistry"] = "ME Registry";
    RegistrySource["MDRegistry"] = "MD Registry";
    RegistrySource["MARegistry"] = "MA Registry";
    RegistrySource["MIRegistry"] = "MI Registry";
    RegistrySource["MNRegistry"] = "MN Registry";
    RegistrySource["MSRegistry"] = "MS Registry";
    RegistrySource["MORegistry"] = "MO Registry";
    RegistrySource["MTRegistry"] = "MT Registry";
    RegistrySource["NERegistry"] = "NE Registry";
    RegistrySource["NVRegistry"] = "NV Registry";
    RegistrySource["NHRegistry"] = "NH Registry";
    RegistrySource["NJRegistry"] = "NJ Registry";
    RegistrySource["NMRegistry"] = "NM Registry";
    RegistrySource["NYRegistry"] = "NY Registry";
    RegistrySource["NCRegistry"] = "NC Registry";
    RegistrySource["NDRegistry"] = "ND Registry";
    RegistrySource["MPRegistry"] = "MP Registry";
    RegistrySource["OHRegistry"] = "OH Registry";
    RegistrySource["OKRegistry"] = "OK Registry";
    RegistrySource["ORRegistry"] = "OR Registry";
    RegistrySource["PARegistry"] = "PA Registry";
    RegistrySource["PRRegistry"] = "PR Registry";
    RegistrySource["RIRegistry"] = "RI Registry";
    RegistrySource["SCRegistry"] = "SC Registry";
    RegistrySource["SDRegistry"] = "SD Registry";
    RegistrySource["TNRegistry"] = "TN Registry";
    RegistrySource["TXRegistry"] = "TX Registry";
    RegistrySource["UTRegistry"] = "UT Registry";
    RegistrySource["VTRegistry"] = "VT Registry";
    RegistrySource["VARegistry"] = "VA Registry";
    RegistrySource["VIRegistry"] = "VI Registry";
    RegistrySource["WARegistry"] = "WA Registry";
    RegistrySource["WVRegistry"] = "WV Registry";
    RegistrySource["WIRegistry"] = "WI Registry";
    RegistrySource["WYRegistry"] = "WY Registry";
    RegistrySource["AdvancedDirective"] = "Advanced Directive";
    RegistrySource["StateRegulation"] = "State Regulation";
    RegistrySource["License"] = "License";
    RegistrySource["Will"] = "Will";
    RegistrySource["Other"] = "Other";
})(RegistrySource = exports.RegistrySource || (exports.RegistrySource = {}));
