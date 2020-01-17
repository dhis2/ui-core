# ui-core

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master build)](https://ui-core.dhis2.nu/)**

## Requires polyfills

[See documentation for getting started](https://ui-core.dhis2.nu/#/getting-started?id=polyfills).

These are included with apps generated with Create React App, and as such are
usually accounted for, but in other environments, you will have to satisfy them yourself.

### Review

Make a PR from the component branch. Add a team member who can review
the code and example for both **LTR** and **RTL** modes.

## Development

We use [Storybook](https://storybook.js.org) that is excellent for
testing components while developing them.

```
yarn install
yarn start
```

The Storybook runs on localhost:5000.

### Apply the code style

This library follows the [dhis2
code-style](https://github.com/dhis2/cli-style). There is a commit hook
that will apply the code style to staged files, but if you want to do
this manually during development, run:

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

**Never push straight to master, always go through a PR!**

## Testing

Testing is done with cypress & cucumber.

-   Run `yarn cypress:run`<br />
    This will run cypress and exit with either 0 or 1

-   Run `yarn cypress:open`<br />
    This will open the cypress gui, which is useful for writing tests

### Recording videos and taking screenshots

When running `yarn cypress:run`, by default no video is recorded and no
screenshot will be taken.

-   Recording videos can be enabled by supplying the
    `CYPRESS_VIDEO=true` env var.
-   Taking screenshots can be enabled by supplying the
    `CYPRESS_SCREENSHOT=true` env var.

### Storybook stories for testing

Sometimes it's required to add stateful stories to test certain behavior.
That's why you can add files with the following file name format: `*.stories.testing.js`
These stories will not be used when generating the docs storybook and can
contain more sophisticated scenarios for testing.
