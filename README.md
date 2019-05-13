# ui-core

[![Greenkeeper
badge](https://badges.greenkeeper.io/dhis2/ui-core.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

**[Online docs and demos (latest master
build)](https://d2-ci.github.io/ui-core/)**

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

## FAQ

#### How to avoid a global style rule from affecting a ui-core component?

The best practice is that each component has styles that are scoped to
that component to avoid style rules that leak out from one component and
bleeds into another component.

Generally all the CSS-in-JS solutions grant this out of the box, and
this is only a problem when using global stylesheets, e.g. by importing
`index.css` in an application and adding global rules to it.

`index.css`:
```
div {
    padding: 20px;
}

.disabled {
    opacity: 0.5;    
}
```

These styles will bleed into all components that use `div` or
`.disabled` and doesn't itself set those rules and win by specificity.

If a rule is not set by the component, the technique that overrides
through the use of `className` still applies, it's just "softer" and
does not require `!important` to counter the rules.

If the rules do something `!important`, the only course of action is to
counter it with another `!important` rule. Given the following CSS:

`index.css`:
```
div {
    padding: 20px !important;
}

.disabled {
    opacity: 0.5 !important;    
}
```

Now there is no way for specificity to win, and all components that use
those classes or elements will inherit those rules.

If you cannot control the CSS that bleeds into `ui` components, then
you need to define a class that counters the effects of the rule, and
use the `className` prop to override the global rule.

`index.css`:
```
.fix {
    opacity: 1 !important;
    padding: 10px !important;
}
```

Pass that to the component through `className='fix'`, and it should
negate the troublesome CSS. Once the global rules in the App has been
removed, it is possible to remove the `className='fix'` as well. This
should be considered a temporary measure.

**Best practice suggestion**: If you can control the CSS, _do not use
`!important`_ and _do not allow your CSS rules to leak into the global
scope_.




