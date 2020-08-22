const { baseRules, jsOverrides, vueOverrides } = require('./rules');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides, vueOverrides],
});
