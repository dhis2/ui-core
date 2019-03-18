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

## Style

-   CSS: https://github.com/necolas/idiomatic-css
-   JS: https://github.com/dhis2/code-style

### Review

Make a PR from the component branch. Add a team member who can review
the code and example for both **LTR** and **RTL** modes.

## Kitchen Sink

-   [Sidebar](https://github.com/dhis2/ui/blob/master/docs/src/Sidebar/index.js)
    `export const list` determines all site content. [id:
    'identifier'](https://github.com/dhis2/ui/blob/master/docs/src/Sidebar/index.js#L18)
    in list is referenced in content view on the right side.

-   [View](https://github.com/dhis2/ui/blob/master/docs/src/View/index.js)
    loads all demos

-   [demos](https://github.com/dhis2/ui/blob/master/docs/src/demos/index.js)
    accumulates all demos. Code structure for demos are organized same
    as Menu structure in Sidebar e.g.
    [structure](https://github.com/dhis2/ui/tree/master/docs/src/demos)

-   We export a demo by name.
    [HeaderBarDemo](https://github.com/dhis2/ui/blob/master/docs/src/demos/Organisms/HeaderBar/index.js).
    Attach a static class variable `static id = 'headerbar'` which will
    connect _HeaderBarDemo_ to link in the _Sidebar_.

## Development

### Run the demo while actively developing

First install dependencies for both the ui components (in root_dir) and the demo (in docs folder):

```
cd [root_dir]
yarn install

cd [root_dir]/docs
yarn install
```

Then run the demo while watching the source files:

```
cd [root_dir]
yarn link
yarn start

cd [root_dir]/docs
yarn link @dhis2/ui-core
yarn start
```

The demo runs on localhost:5000.

### Apply the code style

This library follows the [dhis2 code-style](https://github.com/dhis2/cli-style). There is a commit hook that will apply the code style to staged files, but if you want to do this manually during development, run:

```
yarn format
```

### Check bundle size

The build will fail if the size of the built bundle exceeds the value set in [.size-limit.js](./.size-limit.js). To check the size of the current bundle, run:

```
yarn size
```

### Commit messages

This library follows the commit message style defined in [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional#rules). There is a pre-commit hook that will stop commits that don't follow the convention.

### Releasing

When a PR is merged to the **master** branch, the release process
automatically starts.

It is very important that the commit that lands on **master** follows
the conventional commit format, since that is what is used to
automatically determine the next version.
