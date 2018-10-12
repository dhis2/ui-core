# ui

[![Greenkeeper badge](https://badges.greenkeeper.io/dhis2/ui.svg)](https://greenkeeper.io/)

Re-work of d2-ui

## Resources

https://jira.dhis2.org/browse/TECH-59 (Spec and design)

### Review

Make a PR from the component branch. Add a team member who can review the code and example for both **LTR** and **RTL** modes.

## Kitchen Sink

- _example-app/src/SideBar/index.js_ `export const list` determines all site content. `id: 'identifier'` in list is referenced in  content view on the right side

- _example-app/src/View/index.js_ loads all demos
https://github.com/dhis2/ui/blob/master/example-app/src/View/index.js

- _example-app/src/demos/index.js_ loads all demos. Code structure for demos are organized same as shown in left Menu under _example-app/src/demos_

- We export a demo by name. e.g. HeaderBarDemo. Attach a static variable e.g. `static id = 'headerbar'` and it will connect _HeaderBarDemo_ to link in the _Sidebar_

## Documentation

You can find the most recent documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
