const { baseRules } = require('./rules');
const { jsOverrides, tsOverrides, vueOverrides } = require('./overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides, tsOverrides, vueOverrides],
});
