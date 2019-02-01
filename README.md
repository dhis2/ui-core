# ui

[![Greenkeeper
badge](https://badges.greenkeeper.io/dhis2/ui.svg)](https://greenkeeper.io/)

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
