const { baseRules } = require('./rules');
const { jsOverrides, vueOverrides } = require('./overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides, vueOverrides],
});
