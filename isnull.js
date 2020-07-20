/*==================
[NodeJS] Advanced Determine - Is Null
	Language:
		NodeJS 14
==================*/
const internalService = require("./internalservice.js");
const isArray = require("./isarray.js");
const isJSON = require("./isjson.js");
const isString = require("./isString.js");

/**
 * @function isNull
 * @alias isNul
 * @description Determine item is type of null or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option] Option.
 * @param {boolean} [option.allowExtend=false] Allow to extend determine type of null.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @param {boolean} [option.allowWhitespace=true] When option.allowExtend is true, allow whitespace in string.
 * @returns {boolean} Determine result.
 */
function isNull(item, option) {
	let runtime = {
		allowStringify: false,
		allowExtend: false
	};
	if (isJSON(option) == true) {
		if (option.allowStringify) {
			if (typeof option.allowStringify != "boolean") {
				return internalService.typeError(`Invalid type of "option.allowStringify"! Require type of boolean.`);
			};
			runtime.allowStringify = option.allowStringify;
		};
		if (option.allowExtend) {
			if (typeof option.allowExtend != "boolean") {
				return internalService.typeError(`Invalid type of "option.allowExtend"! Require type of boolean.`);
			};
			runtime.allowExtend = option.allowExtend;
		};
	};
	if (item === null) {
		return true;
	};
	if (runtime.allowStringify == true) {
		if (item === "null") {
			return true;
		};
	};
	if (runtime.allowExtend == true) {
		if (
			isArray(item) == null ||
			isJSON(item) == null ||
			isString(item, option) == null
		) {
			return true;
		};
	};
	return false;
};
module.exports = isNull;
