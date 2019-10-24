import React from 'react'
import propTypes from 'prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { FilteredMenu as CommonFilteredMenu } from '../Select/FilteredMenu.js'
import { Menu } from './Menu.js'

const FilteredMenu = props => <CommonFilteredMenu {...props} Menu={Menu} />

FilteredMenu.propTypes = {
    empty: propTypes.node,
    options: propTypes.node,
    onChange: propTypes.func,
    selected: singleSelectedPropType,
    placeholder: propTypes.string,
}

export { FilteredMenu }
