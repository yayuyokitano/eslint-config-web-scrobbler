module.exports = {
	files: ['*.js', '*.jsx'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: '2017',
		sourceType: 'module',
	},
	rules: {
		strict: ['error', 'global'],

		'jsdoc/no-undefined-types': 'warn',
		'jsdoc/require-param-type': 'warn',
		'jsdoc/require-returns-type': 'warn',
	},
};
