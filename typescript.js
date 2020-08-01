'use strict';

const { baseRules, tsRules } = require('./rules');

module.exports = {
	...baseRules,
	overrides: [tsRules],
};
