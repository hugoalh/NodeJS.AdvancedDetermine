const isArrayInternal = require("./internal/is-array.js"),
	isString = require("./is-string.js"),
	typeMap = require("./internal/type-map.js");
/**
 * @private
 * @function batchInternal
 * @param {([string,object]|string)} condition
 * @param {*} items
 * @returns {(boolean|null)[]}
 */
function batchInternal(condition, ...items) {
	let typeDeterminerName,
		typeDeterminerOption;
	if (isString(condition) === true) {
		typeDeterminerName = condition;
	} else if (isArrayInternal(condition) === true) {
		if (isString(condition[0]) !== true) {
			throw new TypeError(`Argument \`typeDeterminerName\` must be type of string (non-nullable)!`);
		};
		if (condition.length > 2) {
			throw new SyntaxError(`Argument \`condition\` is not match the required pattern!`);
		};
		[typeDeterminerName, typeDeterminerOption] = condition;
	} else {
		throw new TypeError(`Argument \`condition\` must be type of array or string (non-nullable)!`);
	};
	if (items.length === 0) {
		throw new Error(`Argument \`items\` is not defined!`);
	};
	let typeDeterminerFile = typeMap(typeDeterminerName);
	if (typeof typeDeterminerFile === "undefined") {
		throw new SyntaxError(`Argument \`typeDeterminerName\`'s value is not in the list!`);
	};
	let typeDeterminerFunction;
	try {
		typeDeterminerFunction = require(`./is-${typeDeterminerFile}.js`);
	} catch (error) {
		throw new Error(`Cannot find the module file \`is-${typeDeterminerFile}.js\`! Please reverify package.`);
	};
	let resultObject = {};
	Promise.allSettled(
		items.map((item, index) => {
			new Promise(() => {
				resultObject[index] = typeDeterminerFunction(item, typeDeterminerOption);
			}).catch();
		})
	);
	return Object.values(resultObject);
};
/**
 * @function allIs
 * @description Determine items are match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIs(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return !(resultArray.includes(false) === true);
};
/**
 * @function allIsNot
 * @description Determine items are not match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function allIsNot(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return !(
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	);
};
/**
 * @function eitherIs
 * @description Determine any item is match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function eitherIs(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return (
		resultArray.includes(true) === true ||
		resultArray.includes(null) === true
	);
};
/**
 * @function eitherIsNot
 * @description Determine any item is not match the condition or not.
 * @param {(string|[string,object])} condition Condition.
 * @param  {*} items Items that need to determine.
 * @returns {boolean} Determine result.
 */
function eitherIsNot(condition, ...items) {
	let resultArray = batchInternal(condition, ...items);
	return (resultArray.includes(false) === true);
};
module.exports = {
	allIs,
	allIsNot,
	eitherIs,
	eitherIsNot
};
