[![Deploy Status](https://github.com/jonakoudijs/resume/actions/workflows/deploy.yml/badge.svg)](https://github.com/jonakoudijs/resume/actions/workflows/deploy.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# Jona Resume

My public CV / resume deployed to 
[resume.jona.io](https://resume.jona.io).

## Development

Make sure you have Nodejs installed and the npm command is available.
The template file is `src/index.njk`. The content is defined in the
`src/_data/resume.yaml` file.

Generate the output HTML files to the `_site/` directory with this command:
```sh
npm run build
```

Run the development server (that rebuilds with every change) with the
following command:
```sh
npm run serve
```

## Testing

To test the HTML output the following tools are used:

- [validator](https://github.com/validator/validator)
- [html-validate](https://html-validate.org/usage/)
- [yamllint](https://yamllint.readthedocs.io/en/stable/quickstart.html)

These are installed by running `npm install` in the root:

```sh
$ npm install

added 142 packages, and audited 143 packages in 3s

40 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Run the tests with the following `npm run` commands:

- `npm run lint:html`
- `npm run lint:yaml`
- `npm run validate`

These tests are also run in the CI pipeline.
