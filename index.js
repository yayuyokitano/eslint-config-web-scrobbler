'use strict';

const { baseRules, jsRules } = require('./rules');

module.exports = {
	...baseRules,
	overrides: [jsRules],
};
