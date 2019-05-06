## [2.0.1](https://github.com/dhis2/ui/compare/v2.0.0...v2.0.1) (2019-05-06)


### Bug Fixes

* allow buttons to be used without onclick handlers ([#202](https://github.com/dhis2/ui/issues/202)) ([ec474bc](https://github.com/dhis2/ui/commit/ec474bc))

# [2.0.0](https://github.com/dhis2/ui/compare/v1.1.3...v2.0.0) (2019-05-06)


### Features

* version 2 of ui-core ([#183](https://github.com/dhis2/ui/issues/183)) ([6364f4c](https://github.com/dhis2/ui/commit/6364f4c))


### BREAKING CHANGES

* The component API has been revamped to be simpler and more consistent. See the documentation for a full list.
* This changes the `list` prop passed to DropdownButton and SplitButton to `component`, which enables any component to be used as a menu.
* Event handlers align with the JS API of being called with one argument, the Event.

## [1.1.3](https://github.com/dhis2/ui/compare/v1.1.2...v1.1.3) (2019-03-25)


### Bug Fixes

* use cli to release; remove packages ([#176](https://github.com/dhis2/ui/issues/176)) ([5b0e402](https://github.com/dhis2/ui/commit/5b0e402))
