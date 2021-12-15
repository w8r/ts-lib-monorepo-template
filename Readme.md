# Lerna monorepo with TS packages template

Packages can depend on each other as if they were published and installed globally.
Each package uses `@mapbox/typehead` to build and serve a small demo, but `tsc` to build the source code before testing or publishing. They also use `jest` for unit testing.

## Usage

```bash
$ npm run build  # build all packages
$ npm t          # run all tests
$ npm -w packages/<name> start # run a package's demo
```
