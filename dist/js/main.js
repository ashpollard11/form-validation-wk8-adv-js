"use strict";

console.log("Flava with a cocoa kinda flow");

var disallowedCharacters = ["{}", "[]", "|", "/", ":", ";", "<>", "=", "+"];

var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');

var validatorEmail = new EmailValidator('[name=email]');

var validatorNumMonth = new NumberRangeValidator('[name=month]', 1, 12);
var validatorNumDay = new NumberRangeValidator('[name=day]', 1, 31);
var validatorNumYear = new NumberRangeValidator('[name=year]', 1900, new Date().getFullYear());

var validatorPw = new Validator('[name=password]');
var validatorPwMatch = new MatchValidator('[name=password-valid]', '[name=password]');
var validatorPwLength = new LengthValidator('[name=password]', 3, 20);
var validatorPwDisallowed = new DisallowedValidator('[name=password]', disallowedCharacters);
var validatorSpecialCharacter = new SpecialCharacterValidator('[name=password]');
var validatorUpperLower = new UpperLowerValidator('[name=password]');
//# sourceMappingURL=main.js.map
