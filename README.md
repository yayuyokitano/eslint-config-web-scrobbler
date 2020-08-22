# eslint-config-web-scrobbler [![NPM][npm-badge]][npm] [![Test][workflow-badge]][workflow]

ESLint configuration file for Web Scrobbler projects.

## Usage

You can install `eslint-config-web-scrobbler` by a following way:

```sh
> npm install --save-dev eslint-config-web-scrobbler
```

Then, add `eslint-config-web-scrobbler` to the `extends` array in your
`.eslintrc.*` file.

```json
{
	"extends": ["some-other-config-you-use", "web-scrobbler"]
}
```

You can use `web-scrobbler/typescript` config for projects written in TypeScript:
```json
{
	"extends": ["some-other-config-you-use", "web-scrobbler/typescript"]
}
```

## License

Licensed under the [MIT License](./LICENSE).

<!-- Badges -->

[npm-badge]: https://img.shields.io/npm/v/eslint-config-web-scrobbler
[workflow-badge]: https://github.com/web-scrobbler/eslint-config-web-scrobbler/workflows/Lint/badge.svg

<!-- Related pages -->

[npm]: https://www.npmjs.com/package/eslint-config-web-scrobbler
[workflow]: https://github.com/web-scrobbler/eslint-config-web-scrobbler/actions?query=workflow%3ALint
