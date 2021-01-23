module.exports = {
	files: ['*.ts', '*.tsx'],
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: 'tsconfig.json',
		tsconfigRootDir: '.',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/restrict-template-expressions': [
			'error',
			{ allowAny: true },
		],
		'jsdoc/no-types': 'warn',
	},
};
