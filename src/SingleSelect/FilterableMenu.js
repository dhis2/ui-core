import React from 'react'
import propTypes from '@dhis2/prop-types'
import { singleSelectedPropType } from '../common-prop-types.js'
import { FilterableMenu as CommonFilterableMenu } from '../Select/FilterableMenu.js'
import { Menu } from './Menu.js'

const FilterableMenu = props => <CommonFilterableMenu {...props} Menu={Menu} />

FilterableMenu.propTypes = {
    noMatchText: propTypes.string.isRequired,
    className: propTypes.string,
    empty: propTypes.node,
    handleClose: propTypes.func,
    handleFocusInput: propTypes.func,
    options: propTypes.node,
    placeholder: propTypes.string,
    selected: singleSelectedPropType,
    onChange: propTypes.func,
}

export { FilterableMenu }
