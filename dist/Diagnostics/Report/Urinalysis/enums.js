"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leukocyte = exports.Color = exports.Blood = exports.Bacteria = exports.Appearance = void 0;
/**
 * Apearrance of the urine
 *
 * @enum
 */
var Appearance;
(function (Appearance) {
    Appearance["CLEAR"] = "Clear";
    Appearance["CLOUDY"] = "Cloudy";
    Appearance["HAZY"] = "Hazy";
    Appearance["LIGHT_TURBID"] = "Light Turbid";
    Appearance["SLIGHTLY_CLOUDY"] = "Slightly Cloudy";
    Appearance["SLIGHTLY_HAZY"] = "Slightly Hazy";
    Appearance["TURBID"] = "Turbid";
})(Appearance = exports.Appearance || (exports.Appearance = {}));
/**
 * Bacteria in the urine
 *
 * @enum
 */
var Bacteria;
(function (Bacteria) {
    Bacteria["HEAVY"] = "Heavy";
    Bacteria["LIGHT"] = "Light";
    Bacteria["MODERATE"] = "Moderate";
    Bacteria["NONE"] = "None";
})(Bacteria = exports.Bacteria || (exports.Bacteria = {}));
/**
 * Blood in the urine
 *
 * @enum
 */
var Blood;
(function (Blood) {
    Blood["LARGE"] = "Large";
    Blood["MODERATE"] = "Moderate";
    Blood["SMALL"] = "Small";
    Blood["TRACE"] = "Trace";
})(Blood = exports.Blood || (exports.Blood = {}));
/**
 * Color of the urine
 *
 * @enum
 */
var Color;
(function (Color) {
    Color["AMBER"] = "Amber";
    Color["BROWN"] = "Brown";
    Color["CLEAR"] = "Clear";
    Color["COLORLESS"] = "Colorless";
    Color["DARK_BROWN"] = "Dark Brown";
    Color["DARK_ORANGE"] = "Dark Orange";
    Color["DARK_RED"] = "Dark Red";
    Color["DARK_YELLOW"] = "Dark Yellow ";
    Color["LIGHT_BROWN"] = "Light Brown";
    Color["LIGHT_ORANGE"] = "Light Orange";
    Color["LIGHT_RED"] = "Light Red";
    Color["LIGHT_YELLOW"] = "Light Yellow";
    Color["ORANGE"] = "Orange";
    Color["PINK"] = "Pink";
    Color["RED"] = "Red";
    Color["STRAW"] = "Straw";
    Color["YELLOW"] = "Yellow";
})(Color = exports.Color || (exports.Color = {}));
/**
 * Leukocyte in the urine
 *
 * @enum
 */
var Leukocyte;
(function (Leukocyte) {
    Leukocyte["LARGE"] = "Large";
    Leukocyte["MODERATE"] = "Moderate";
    Leukocyte["SMALL"] = "Small";
    Leukocyte["TRACE"] = "Trace";
})(Leukocyte = exports.Leukocyte || (exports.Leukocyte = {}));
