'use strict';

const { baseRules, jsRules, tsRules } = require('./rules');

module.exports = {
	...baseRules,
	overrides: [jsRules, tsRules],
};
