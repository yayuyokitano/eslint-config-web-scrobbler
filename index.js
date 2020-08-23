const { baseRules } = require('./rules');
const { jsOverrides } = require('./overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides],
});
