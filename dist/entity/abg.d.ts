import { BaseModel } from "./baseModel";
import { ReferralBase } from "./referral";
/**
 * The Mode
 */
export declare enum Mode {
    NC = "NC",
    HFOV = "HFOV",
    APRV = "APRV",
    CMV = "CMV",
    Other = "Other",
    PC = "PC",
    CPAP = "CPAP",
    SIMV = "SIMV",
    PRVC = "PRVC",
    BiPAP = "BiPAP",
    AC = "AC",
    ApneaTest = "ApneaTest"
}
/**
 * Represents an Arterial Blood Gas
 *
 * There will be a Arterial Blood Gas for each draw, so a referral will have multiple ABGs
 *
 * https://en.wikipedia.org/wiki/Arterial_blood_gas_test
 */
export declare class ABGBase extends BaseModel {
    /**
     * @class
     * @ignore
     */
    constructor();
    /**
     * pH
     *
     * The pH or H+ indicates if a person is acidemic (pH < 7.35; H+ >45) or alkalemic (pH > 7.45; H+ < 35).
     *
     * https://en.wikipedia.org/wiki/Arterial_blood_gas_test#pH
     *
     * @max_length 4
     * @decimal_places 2
     */
    ph?: number | null;
    /**
     * pCO2
     *
     * The carbon dioxide partial pressure (PaCO2) is an indicator of CO2 production and
     * elimination: for a constant metabolic rate, the PaCO2 is determined entirely by its
     * elimination through ventilation. A high PaCO2 (respiratory acidosis, alternatively
     * hypercapnia) indicates underventilation (or, more rarely, a hypermetabolic disorder),
     * a low PaCO2 (respiratory alkalosis, alternatively hypocapnia) hyper- or overventilation.
     *
     * https://en.wikipedia.org/wiki/PCO2
     *
     * @max_length 5
     * @decimal_places 2
     */
    pco2?: number | null;
    /**
     * BE
     *
     *
     *
     * @max_length 3
     * @decimal_places 2
     */
    be?: number | null;
    /**
     * BE
     * @max_length 3
     * @decimal_places 2
     */
    bet?: number | null;
    /**
     * HCO3
     *
     * "The HCO3 ion indicates whether a metabolic problem is present (such as ketoacidosis).
     * A low HCO indicates metabolic acidosis, a high HCO indicates metabolic alkalosis. As this
     * value when given with blood gas results is often calculated by the analyzer, correlation
     * should be checked with total CO2 levels as directly measured"
     *
     * https://en.wikipedia.org/wiki/Arterial_blood_gas_test#Parameters_and_reference_ranges
     *
     * @max_length 4
     * @decimal_places 2
     */
    hco3?: number | null;
    /**
     * O2Sat
     *
     * This is the sum of oxygen dissolved in plasma and chemically bound to hemoglobin as determined
     * by the calculation: CaO2 = (PaO2 × 0.003) + (SaO2 × 1.34 × Hgb) where hemoglobin concentration
     * is expressed in g/dL.
     *
     * https://en.wikipedia.org/wiki/Arterial_blood_gas_test#Parameters_and_reference_ranges
     *
     * @max_length 4
     * @decimal_places 2
     */
    o2sat?: number | null;
    /**
     * FIO2
     * @max_length 3
     * @decimal_places 2
     */
    fio2?: number | null;
    /**
     * Respiration Rate
     * @max_length 3
     * @decimal_places 0
     */
    respirationRate?: number | null;
    /**
     * Tidal Volume
     * @max_length TBD
     * @decimal_places TBD
     */
    tv?: number | null;
    /**
     * PEEP
     * @max_length 3
     * @decimal_places 1
     */
    peep?: number | null;
    /**
     * PiP
     * @max_length 3
     * @decimal_places 0
     */
    pip?: number | null;
    /**
     * Mode
     */
    mode?: Mode | null;
    /**
     * The Id we use when we upload this to UNOS
     */
    unosRecordId?: string;
    /**
     * The datetime this was resulted
     */
    datetime: Date;
    /**
     * The referral Id this applies to
     * @format uuid
     */
    referralId: string;
    /**
     * The referral this applies to
     */
    referral: ReferralBase;
}
