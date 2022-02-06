/**
 * Geographical States
 */
export declare enum State {
    AL = "AL",
    AK = "AK",
    AS = "AS",
    AZ = "AZ",
    AR = "AR",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DE = "DE",
    DC = "DC",
    FL = "FL",
    GA = "GA",
    GU = "GU",
    HI = "HI",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    IA = "IA",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    ME = "ME",
    MD = "MD",
    MA = "MA",
    MI = "MI",
    MN = "MN",
    MS = "MS",
    MO = "MO",
    MT = "MT",
    NE = "NE",
    NV = "NV",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NY = "NY",
    NC = "NC",
    ND = "ND",
    MP = "MP",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PA = "PA",
    PR = "PR",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UT = "UT",
    VT = "VT",
    VA = "VA",
    VI = "VI",
    WA = "WA",
    WV = "WV",
    WI = "WI",
    WY = "WY"
}
/**
 * Credentials a person might have
 */
export declare enum Credentials {
    MD = "MD",
    RN = "RN",
    PA = "PA",
    Chap = "Chap",
    SocialWorker = "SocialWorker",
    LVN = "LVN",
    NP = "NP",
    DO = "DO",
    UnitClerk = "UnitClerk"
}
/**
 * Race
 *
 * @default Unknown
 */
export declare enum Race {
    /**
     * American Indian or Alaskan Native descent
     */
    AmericanIndianOrAlaskaNative = "American Indian or Alaska Native",
    Asian = "Asian",
    BlackOrAfricanAmerican = "Black Or African American",
    HispanicOrLatino = "Hispanic Or Latino",
    NativeHawaiianOrOtherPacificIslander = "Native Hawaiian Or Other Pacific Islander",
    White = "White",
    Unknown = "Unknown"
}
/**
 * Sex is one of "Male", "Female", "Unknown"
 *
 *
 * @default Unknown if not Male or Female.
 */
export declare enum Sex {
    Male = "Male",
    Female = "Female",
    Unknown = "Unknown"
}
/**
 * The Circumstance of Death
 */
export declare enum CircumstanceOfDeath {
    MVA = "MVA",
    Suicide = "Suicide",
    Homicide = "Homicide",
    ChildAbuse = "Child Abuse",
    AccidentNonMVA = "Accident, Non-MVA",
    NaturalCauses = "Natural Causes",
    NoneOfTheAbove = "None Of The Above"
}
export declare enum TimeZone {
    EST = "Eastern Standard Time",
    CST = "Central Standard Time",
    MST = "Mountain Standard Time",
    PST = "Pacific Standard Time",
    AKST = "Alaskan Standard Time",
    HST = "Hawaiian Standard Time",
    AWST = "West Australia Standard Time",
    CAST = "Central Australia Standard Time",
    AEST = "East Australia Standard Time"
}
/**
 * A persons registry status
 */
export declare enum RegistryStatus {
    NotRegistered = "Not Registered",
    NotAvailable = "Not Available",
    RegisteredYes = "Registered Yes",
    RegisteredNo = "Registered No"
}
/**
 * A persons registry source
 */
export declare enum RegistrySource {
    ALRegistry = "AL Registry",
    AKRegistry = "AK Registry",
    ASRegistry = "AS Registry",
    AZRegistry = "AZ Registry",
    ARRegistry = "AR Registry",
    CARegistry = "CA Registry",
    CORegistry = "CO Registry",
    CTRegistry = "CT Registry",
    DERegistry = "DE Registry",
    DCRegistry = "DC Registry",
    FLRegistry = "FL Registry",
    GARegistry = "GA Registry",
    GURegistry = "GU Registry",
    HIRegistry = "HI Registry",
    IDRegistry = "ID Registry",
    ILRegistry = "IL Registry",
    INRegistry = "IN Registry",
    IARegistry = "IA Registry",
    KSRegistry = "KS Registry",
    KYRegistry = "KY Registry",
    LARegistry = "LA Registry",
    MERegistry = "ME Registry",
    MDRegistry = "MD Registry",
    MARegistry = "MA Registry",
    MIRegistry = "MI Registry",
    MNRegistry = "MN Registry",
    MSRegistry = "MS Registry",
    MORegistry = "MO Registry",
    MTRegistry = "MT Registry",
    NERegistry = "NE Registry",
    NVRegistry = "NV Registry",
    NHRegistry = "NH Registry",
    NJRegistry = "NJ Registry",
    NMRegistry = "NM Registry",
    NYRegistry = "NY Registry",
    NCRegistry = "NC Registry",
    NDRegistry = "ND Registry",
    MPRegistry = "MP Registry",
    OHRegistry = "OH Registry",
    OKRegistry = "OK Registry",
    ORRegistry = "OR Registry",
    PARegistry = "PA Registry",
    PRRegistry = "PR Registry",
    RIRegistry = "RI Registry",
    SCRegistry = "SC Registry",
    SDRegistry = "SD Registry",
    TNRegistry = "TN Registry",
    TXRegistry = "TX Registry",
    UTRegistry = "UT Registry",
    VTRegistry = "VT Registry",
    VARegistry = "VA Registry",
    VIRegistry = "VI Registry",
    WARegistry = "WA Registry",
    WVRegistry = "WV Registry",
    WIRegistry = "WI Registry",
    WYRegistry = "WY Registry",
    AdvancedDirective = "Advanced Directive",
    StateRegulation = "State Regulation",
    License = "License",
    Will = "Will",
    Other = "Other"
}
