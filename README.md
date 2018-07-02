# ui
Re-work of d2-ui

## Resources
https://jira.dhis2.org/browse/TECH-59 (Spec and design)

### Workflow

#### Adding a Component
- Create a branch for a component e.g. _component/Input_
- Inside src/components create your component with the following directory structure. _src/components/Input/index.js,styles.css_

#### Component Example
Create an example uage of the component in both LTR and RTL mode _src/pages/Input/index.js,styles.css_
For documentation in the examples use [d2-i18n](https://github.com/dhis2/d2-i18n) for internationalization so we easily internationalize docs at a later stage.

#### Review
Make a PR from the component branch. Add a team member who can review the code and example for both **LTR** and **RTL** modes.

## Documentation
You can find the most recent documentation [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
