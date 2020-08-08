'use strict';

const { baseRules, jsRules, vueRules } = require('./rules');

module.exports = {
	...baseRules,
	overrides: [jsRules, vueRules],
};
