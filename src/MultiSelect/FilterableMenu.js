import React from 'react'
import propTypes from '@dhis2/prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { FilterableMenu as CommonFilterableMenu } from '../Select/FilterableMenu.js'
import { Menu } from './Menu.js'

const FilterableMenu = props => <CommonFilterableMenu {...props} Menu={Menu} />

FilterableMenu.propTypes = {
    className: propTypes.string,
    empty: propTypes.node,
    options: propTypes.node,
    onChange: propTypes.func,
    selected: multiSelectedPropType,
    placeholder: propTypes.string,
}

export { FilterableMenu }
