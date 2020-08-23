const jsOverrides = {
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

const tsOverrides = {
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
		'jsdoc/no-types': 'warn',
	},
};

const vueOverrides = {
	files: '*.vue',
	extends: ['plugin:vue/essential'],
};

module.exports = {
	jsOverrides,
	tsOverrides,
	vueOverrides,
};
