const { baseRules } = require('./rules');
const { jsOverrides, tsOverrides } = require('./overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides, tsOverrides],
});
