<h1>Sample NPM Package</h1>

This builds and yarn pack the src directory to a .tgz that can be used to install as an npm package in other projects.

- [Build project](#build-project)
- [Create package locally](#create-package-locally)
  - [Check content of local package](#check-content-of-local-package)
- [Link package](#link-package)
  - [Unlink package](#unlink-package)

# Build project

Before creating the package to install, we need to build the project first by running:

```bash
yarn build
```

This will transpile the `src` directory to a `dist` directory which the package will include.

You can then either publish this to npm or install the package on another local project.

# Create package locally

Two ways to try this package locally.

Preferred creating package locally to install in another project instead of a symlink

Create a package locally using [yarn pack](https://classic.yarnpkg.com/en/docs/cli/pack). This will create a `*.tgz` file of the package that can be installed in another project.

From another project, install this package using `yarn add` or `npm install`.

```bash
# Using yarn
yarn add ../../path/to/tgz/file.tgz

# Using npm
npm install ../../path/to/tgz/file/tgz
```

## Check content of local package

```bash
tar -tvf style-lint-js-v1.tgz
```

# Link package

Run [yarn link](https://classic.yarnpkg.com/lang/en/docs/cli/link/) from this directory

And then run `yarn link style-lint-js` from another project using this package.

## Unlink package

Reverse the link procedure.

Run `yarn unlink style-lint-js` from the project using this package.

Run `yarn unlink` from this directory.
