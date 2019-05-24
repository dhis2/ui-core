## [2.4.2](https://github.com/dhis2/ui/compare/v2.4.1...v2.4.2) (2019-05-24)


### Bug Fixes

* **linting:** ran `d2 style js install` to generate eslint config ([#234](https://github.com/dhis2/ui/issues/234)) ([f75c8ba](https://github.com/dhis2/ui/commit/f75c8ba))

## [2.4.1](https://github.com/dhis2/ui/compare/v2.4.0...v2.4.1) (2019-05-23)


### Bug Fixes

* **buttonstrip:** remove default prop so start class is not always added ([#233](https://github.com/dhis2/ui/issues/233)) ([0526051](https://github.com/dhis2/ui/commit/0526051))

# [2.4.0](https://github.com/dhis2/ui/compare/v2.3.0...v2.4.0) (2019-05-23)


### Features

* **buttonstrip:** add button strip component ([#227](https://github.com/dhis2/ui/issues/227)) ([63d774e](https://github.com/dhis2/ui/commit/63d774e))

# [2.3.0](https://github.com/dhis2/ui/compare/v2.2.3...v2.3.0) (2019-05-23)


### Features

* **prop-types:** mutually exclusive booleans ([#232](https://github.com/dhis2/ui/issues/232)) ([c2ce2c1](https://github.com/dhis2/ui/commit/c2ce2c1))

## [2.2.3](https://github.com/dhis2/ui/compare/v2.2.2...v2.2.3) (2019-05-22)


### Bug Fixes

* issue with gatsby ([#231](https://github.com/dhis2/ui/issues/231)) ([cfb4718](https://github.com/dhis2/ui/commit/cfb4718))

## [2.2.2](https://github.com/dhis2/ui/compare/v2.2.1...v2.2.2) (2019-05-22)


### Bug Fixes

* introduce the stacking context ([#229](https://github.com/dhis2/ui/issues/229)) ([54acc10](https://github.com/dhis2/ui/commit/54acc10))

## [2.2.1](https://github.com/dhis2/ui/compare/v2.2.0...v2.2.1) (2019-05-21)


### Bug Fixes

* add font-family to everything ([#226](https://github.com/dhis2/ui/issues/226)) ([d177230](https://github.com/dhis2/ui/commit/d177230))

# [2.2.0](https://github.com/dhis2/ui/compare/v2.1.2...v2.2.0) (2019-05-16)


### Features

* use a portal to overlay the loader ([#223](https://github.com/dhis2/ui/issues/223)) ([61b5581](https://github.com/dhis2/ui/commit/61b5581))

## [2.1.2](https://github.com/dhis2/ui/compare/v2.1.1...v2.1.2) (2019-05-15)


### Bug Fixes

* **input field and select field:** crop long labels ([#222](https://github.com/dhis2/ui/issues/222)) ([db6f74e](https://github.com/dhis2/ui/commit/db6f74e))

## [2.1.1](https://github.com/dhis2/ui/compare/v2.1.0...v2.1.1) (2019-05-13)


### Bug Fixes

* required star ([#212](https://github.com/dhis2/ui/issues/212)) ([7a2b306](https://github.com/dhis2/ui/commit/7a2b306))

# [2.1.0](https://github.com/dhis2/ui/compare/v2.0.2...v2.1.0) (2019-05-09)


### Features

* add modal component ([#205](https://github.com/dhis2/ui/issues/205)) ([23a41f0](https://github.com/dhis2/ui/commit/23a41f0))

## [2.0.2](https://github.com/dhis2/ui/compare/v2.0.1...v2.0.2) (2019-05-06)


### Bug Fixes

* ensure that both bundles are built using prod mode ([#203](https://github.com/dhis2/ui/issues/203)) ([b3145c9](https://github.com/dhis2/ui/commit/b3145c9))

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
