/*==================
[NodeJS] Advanced Determine - Is String ASCII
	Language:
		NodeJS 14
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringASCII
 * @alias isStrASCII
 * @description Determine item is type of ASCII string or not.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringASCII(item) {
	if (isString(item) != true) {
		return false;
	};
	for (let index = 0; index < item.length; index++) {
		if (item.charCodeAt(index) > 127) {
			return false;
		};
	};
	return true;
};
module.exports = isStringASCII;
