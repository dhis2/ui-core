# ui-core

[![Greenkeeper
badge](https://badges.greenkeeper.io/dhis2/ui.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master
build)](https://d2-ci.github.io/ui/)**

## Requires polyfills

These are included with apps generated with Create React App, but if you
want to use this library with the environments in `.browserslistrc` you
need to polyfill the following:

-   web.dom.iterable
-   es6.array.fill
-   es6.array.iterator
-   es6.function.name
-   es6.object.assign
-   es6.object.keys
-   es6.object.set-prototype-of
-   es6.promise
-   es6.regexp.match
-   es6.regexp.split
-   es6.string.starts-with
-   es6.string.iterator
-   es6.symbol
-   es7.symbol.async-iterator

### Review

Make a PR from the component branch. Add a team member who can review
the code and example for both **LTR** and **RTL** modes.

## Development

We use [Storybook](https://storybook.js.org) which is excellent for testing components while developing them.

```
yarn install
yarn start
```

The Storybook runs on localhost:5000.

### Apply the code style

This library follows the [dhis2 code-style](https://github.com/dhis2/cli-style). There is a commit hook that will apply the code style to staged files, but if you want to do this manually during development, run:

```
yarn format
```

### Commit messages

This library follows the commit message style defined in [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional#rules). There is a pre-commit hook that will stop commits that don't follow the convention.

### Releasing

When a PR is merged to the **master** branch, the release process
automatically starts.

It is very important that the commit that lands on **master** follows
the conventional commit format, since that is what is used to
automatically determine the next version.
