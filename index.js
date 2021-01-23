const baseRules = require('./config/base-rules');
const jsOverrides = require('./config/javascript-overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [jsOverrides],
});
