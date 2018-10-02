/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Paper from '../Paper'

import s from './styles'

function Menu({ options, selectHandler, closePopover, children }) {
    if (children) {
        return (
            <Paper elevation={4}>
                <ul className={s('container')}>{children}</ul>
            </Paper>
        )
    }

    return (
        <Paper elevation={4}>
            <ul className={s('container')}>
                {options.map(({ onClick, ...rest }, idx) => (
                    <MenuItem
                        key={`mi-${idx}`}
                        onClick={onClick || selectHandler}
                        closePopover={closePopover}
                        {...rest}
                    />
                ))}
            </ul>
        </Paper>
    )
}

Menu.propTypes = {
    options: PropTypes.array,
    selectHandler: PropTypes.func,
    closePopover: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
}

export { Menu }
export default Menu
