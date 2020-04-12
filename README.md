# eslint-config-web-scrobbler [![NPM][NpmBadge]][Npm] [![Test][WorkflowBadge]][Workflow]

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
  "extends": [
    "some-other-config-you-use",
    "web-scrobbler"
  ]
}
```

## License

Licensed under the [MIT License](./LICENSE).

<!-- Badges -->
[NpmBadge]: https://img.shields.io/npm/v/eslint-config-web-scrobbler
[WorkflowBadge]: https://github.com/web-scrobbler/eslint-config-web-scrobbler/workflows/Lint/badge.svg

<!-- Related pages -->
[Npm]: https://www.npmjs.com/package/eslint-config-web-scrobbler
[Workflow]: https://github.com/web-scrobbler/eslint-config-web-scrobbler/actions?query=workflow%3ALint
