'use strict';

const {
	baseRules,
	jsOverrides,
	tsOverrides,
	vueOverrides,
} = require('./rules');

module.exports = {
	...baseRules,
	overrides: [jsOverrides, tsOverrides, vueOverrides],
};
