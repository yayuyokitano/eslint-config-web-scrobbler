module.exports = {
	files: '*.vue',
	extends: ['plugin:vue/essential'],
	rules: {
		'object-shorthand': ['error', 'always'],

		// Vue 3 specifix rules
		'vue/no-multiple-template-root': 'off',
		'vue/no-v-model-argument': 'off',
	},
};
