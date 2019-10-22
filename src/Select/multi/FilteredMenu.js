import React from 'react'
import propTypes from 'prop-types'
import { FilteredMenu as CommonFilteredMenu } from '../common/FilteredMenu.js'
import { Menu } from './Menu.js'

const FilteredMenu = props => <CommonFilteredMenu {...props} Menu={Menu} />

FilteredMenu.propTypes = {
    empty: propTypes.node,
    options: propTypes.node.isRequired,
    onChange: propTypes.func.isRequired,
    selected: propTypes.object.isRequired,
    placeholder: propTypes.string.isRequired,
}

export { FilteredMenu }
