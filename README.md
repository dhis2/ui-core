# ui

[![Greenkeeper badge](https://badges.greenkeeper.io/dhis2/ui.svg)](https://greenkeeper.io/)

**[Online docs and demos (latest master build)](https://d2-ci.github.io/ui/)**

## Style

-   CSS: https://github.com/necolas/idiomatic-css
-   JS: https://github.com/dhis2/code-style

### Review

Make a PR from the component branch. Add a team member who can review the code and example for both **LTR** and **RTL** modes.

## Kitchen Sink

-   [SideBar](https://github.com/dhis2/ui/blob/master/example-app/src/SideBar/index.js) `export const list` determines all site content. [id: 'identifier'](https://github.com/dhis2/ui/blob/master/example-app/src/Sidebar/index.js#L18) in list is referenced in content view on the right side.

-   [View](https://github.com/dhis2/ui/blob/master/example-app/src/View/index.js) loads all demos

-   [demos](https://github.com/dhis2/ui/blob/master/example-app/src/demos/index.js) accumulates all demos. Code structure for demos are organized same as Menu structure in Sidebar e.g. [structure](https://github.com/dhis2/ui/tree/master/example-app/src/demos)

-   We export a demo by name. [HeaderBarDemo](https://github.com/dhis2/ui/blob/master/example-app/src/demos/Organisms/HeaderBar/index.js). Attach a static class variable `static id = 'headerbar'` which will connect _HeaderBarDemo_ to link in the _Sidebar_.

## Documentation

You can find the most recent documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
