const version = 1;
const batchDetermine = require("./batch-determine.js"),
	isArray = require("./is-array.js"),
	isBigInteger = require("./is-big-integer.js"),
	isBigIntegerNegative = require("./is-big-integer-negative.js"),
	isBigIntegerPositive = require("./is-big-integer-positive.js"),
	isBoolean = require("./is-boolean.js"),
	isBuffer = require("./is-buffer.js"),
	isFunction = require("./is-function.js"),
	isNull = require("./is-null.js"),
	isNumber = require("./is-number.js"),
	isNumberFloat = require("./is-number-float.js"),
	isNumberInteger = require("./is-number-integer.js"),
	isNumberNegative = require("./is-number-negative.js"),
	isNumberNegativeFloat = require("./is-number-negative-float.js"),
	isNumberNegativeInteger = require("./is-number-negative-integer.js"),
	isNumberNegativeSafeFloat = require("./is-number-negative-safe-float.js"),
	isNumberNegativeSafeInteger = require("./is-number-negative-safe-integer.js"),
	isNumberPositive = require("./is-number-positive.js"),
	isNumberPositiveFloat = require("./is-number-positive-float.js"),
	isNumberPositiveInteger = require("./is-number-positive-integer.js"),
	isNumberPositiveSafeFloat = require("./is-number-positive-safe-float.js"),
	isNumberPositiveSafeInteger = require("./is-number-positive-safe-integer.js"),
	isNumberSafeFloat = require("./is-number-safe-float.js"),
	isNumberSafeInteger = require("./is-number-safe-integer.js"),
	isObject = require("./is-object.js"),
	isObjectPair = require("./is-object-pair.js"),
	isRegularExpression = require("./is-regular-expression.js"),
	isString = require("./is-string.js"),
	isStringASCII = require("./is-string-ascii.js"),
	isStringifyJSON = require("./is-stringify-json.js"),
	isStringLowerCase = require("./is-string-lower-case.js"),
	isStringMultipleLine = require("./is-string-multiple-line.js"),
	isStringSingleLine = require("./is-string-single-line.js"),
	isStringUpperCase = require("./is-string-upper-case.js"),
	isUndefined = require("./is-undefined.js"),
	isWeakMap = require("./is-weak-map.js"),
	isWeakSet = require("./is-weak-set.js");
module.exports = {
	allIs: batchDetermine.allIs,
	allIsNot: batchDetermine.allIsNot,
	areEqual: require("./are-equal.js"),
	eitherIs: batchDetermine.eitherIs,
	eitherIsNot: batchDetermine.eitherIsNot,
	isArr: isArray,
	isArray: isArray,
	isBigInt: isBigInteger,
	isBigInteger: isBigInteger,
	isBigIntegerNegative: isBigIntegerNegative,
	isBigIntegerPositive: isBigIntegerPositive,
	isBigIntNgt: isBigIntegerNegative,
	isBigIntPst: isBigIntegerPositive,
	isBool: isBoolean,
	isBoolean: isBoolean,
	isBuf: isBuffer,
	isBuffer: isBuffer,
	isDataView: require("./is-data-view.js"),
	isDate: require("./is-date.js"),
	isDict: isObjectPair,
	isDictionary: isObjectPair,
	isFloat: isNumberFloat,
	isFlt: isNumberFloat,
	isFn: isFunction,
	isFunction: isFunction,
	isInt: isNumberInteger,
	isInteger: isNumberInteger,
	isJSON: require("./is-json.js"),
	isList: isArray,
	isMap: require("./is-map.js"),
	isMapWeak: isWeakMap,
	isNil: isNull,
	isNul: isNull,
	isNull: isNull,
	isNum: isNumber,
	isNumber: isNumber,
	isNumberFloat: isNumberFloat,
	isNumberInteger: isNumberInteger,
	isNumberNegative: isNumberNegative,
	isNumberNegativeFloat: isNumberNegativeFloat,
	isNumberNegativeInteger: isNumberNegativeInteger,
	isNumberNegativeSafeFloat: isNumberNegativeSafeFloat,
	isNumberNegativeSafeInteger: isNumberNegativeSafeInteger,
	isNumberPositive: isNumberPositive,
	isNumberPositiveFloat: isNumberPositiveFloat,
	isNumberPositiveInteger: isNumberPositiveInteger,
	isNumberPositiveSafeFloat: isNumberPositiveSafeFloat,
	isNumberPositiveSafeInteger: isNumberPositiveSafeInteger,
	isNumberSafeFloat: isNumberSafeFloat,
	isNumberSafeInteger: isNumberSafeInteger,
	isNumFlt: isNumberFloat,
	isNumInt: isNumberInteger,
	isNumNgt: isNumberNegative,
	isNumNgtFlt: isNumberNegativeFloat,
	isNumNgtInt: isNumberNegativeInteger,
	isNumNgtSFlt: isNumberNegativeSafeFloat,
	isNumNgtSInt: isNumberNegativeSafeInteger,
	isNumPst: isNumberPositive,
	isNumPstFlt: isNumberPositiveFloat,
	isNumPstInt: isNumberPositiveInteger,
	isNumPstSFlt: isNumberPositiveSafeFloat,
	isNumPstSInt: isNumberPositiveSafeInteger,
	isNumSFlt: isNumberSafeFloat,
	isNumSInt: isNumberSafeInteger,
	isObj: isObject,
	isObject: isObject,
	isObjectPair: isObjectPair,
	isObjectPlain: isObjectPair,
	isObjPair: isObjectPair,
	isObjPlain: isObjectPair,
	isRegEx: isRegularExpression,
	isRegExp: isRegularExpression,
	isRegExr: isRegularExpression,
	isRegularExpression: isRegularExpression,
	isSet: require("./is-set.js"),
	isSetWeak: isWeakSet,
	isStr: isString,
	isStrASCII: isStringASCII,
	isString: isString,
	isStringASCII: isStringASCII,
	isStringifiedJSON: isStringifyJSON,
	isStringifyJSON: isStringifyJSON,
	isStringLowerCase: isStringLowerCase,
	isStringML: isStringMultipleLine,
	isStringMultiLine: isStringMultipleLine,
	isStringMultipleLine: isStringMultipleLine,
	isStringSingleLine: isStringSingleLine,
	isStringSL: isStringSingleLine,
	isStringUpperCase: isStringUpperCase,
	isStrJSON: isStringifyJSON,
	isStrL: isStringLowerCase,
	isStrLC: isStringLowerCase,
	isStrML: isStringMultipleLine,
	isStrSL: isStringSingleLine,
	isStrU: isStringUpperCase,
	isStrUC: isStringUpperCase,
	isSymbol: require("./is-symbol.js"),
	isUdf: isUndefined,
	isUndefined: isUndefined,
	isWeakMap: isWeakMap,
	isWeakSet: isWeakSet,
	typeOf: require("./type-of.js"),
	v: version,
	ver: version,
	version: version
};
