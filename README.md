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

## Making Changes

The app is linked to this repositories application version (current version can be found in the package.json file). Making changes to the app will require a new version to be released (along side with your changes). When you've committed your changes to your branch and are ready to merge into master, you will need to release a new version. To do this, run:

```bash
yarn release
```

After the release command is run, the app will be built and the new version will be released. It can now be merged into master. Dependabot from the app should pickup the new version and automatically make a PR to update the app.
