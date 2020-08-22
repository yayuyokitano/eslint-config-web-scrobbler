'use strict';

const { baseRules, jsOverrides, vueOverrides } = require('./rules');

module.exports = {
	...baseRules,
	overrides: [jsOverrides, vueOverrides],
};
