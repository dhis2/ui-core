import React from 'react'
import propTypes from '@dhis2/prop-types'
import { multiSelectedPropType } from '../common-prop-types.js'
import { FilterableMenu as CommonFilterableMenu } from '../Select/FilterableMenu.js'
import { Menu } from './Menu.js'

const FilterableMenu = props => <CommonFilterableMenu {...props} Menu={Menu} />

FilterableMenu.propTypes = {
    noMatchText: propTypes.string.isRequired,
    className: propTypes.string,
    empty: propTypes.node,
    options: propTypes.node,
    placeholder: propTypes.string,
    selected: multiSelectedPropType,
    onChange: propTypes.func,
}

export { FilterableMenu }
