/**
 * @function isDate
 * @description Determine item is instance of date or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isDate(item) {
	return (item instanceof Date);
};
module.exports = isDate;
