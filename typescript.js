const {
	baseRules,
	jsOverrides,
	tsOverrides,
	vueOverrides,
} = require('./rules');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides, tsOverrides, vueOverrides],
});
