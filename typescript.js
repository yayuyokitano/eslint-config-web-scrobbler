const baseRules = require('./config/base-rules');
const javaScriptOverrides = require('./config/javascript-overrides');
const typeScriptOverrides = require('./config/typescript-overrides');

module.exports = Object.assign({}, baseRules, {
	overrides: [javaScriptOverrides, typeScriptOverrides],
});
