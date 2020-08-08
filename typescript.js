'use strict';

const { baseRules, jsRules, tsRules, vueRules } = require('./rules');

module.exports = {
	...baseRules,
	overrides: [jsRules, tsRules, vueRules],
};
