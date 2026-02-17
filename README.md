Forked from [evergreen-ui](https://github.com/segmentio/evergreen) by Segment.

This is a fork of the original Evergreen UI project by Segment. The original project is no longer maintained, so we decided to fork it and continue development.

## Usage

Ensure you have the following dependencies installed:

- yarn (https://yarnpkg.com/)
- NVM (Node Version Manager) (https://github.com/nvm-sh/nvm)

Switch to the correct Node.js version:

```bash
nvm use
```

To install the project dependencies, run:

```bash
yarn install
```

This will install all the dependencies required to run the project but errors will be thrown. Even though errors are thrown, the project will still run.

## Releasing a New Version

The app (`analytics` repo) is linked to this repository's published version (current version can be found in `package.json`). Making changes to the app will require a new version of this package to be released alongside your changes.

Once your changes are committed and ready to merge into master:

```bash
yarn build
git add -A
git commit -m "Build"
npm version [major | minor | patch]
git push --tags
```

Choose `major`, `minor`, or `patch` based on the scope of your changes. The `npm version` command will bump the version in `package.json` and create a git tag.

After pushing, merge your branch into master. Dependabot from the app should pick up the new version and automatically create a PR to update it.
