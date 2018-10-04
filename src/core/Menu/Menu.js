/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Paper from '../Paper'

import s from './styles'

function Menu({ list, onSelect, onClose, children }) {
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
                {list.map(({ onClick, ...rest }, idx) => (
                    <MenuItem
                        key={`mi-${idx}`}
                        onClick={onClick || onSelect}
                        onSelect={onSelect}
                        onClose={onClose}
                        {...rest}
                    />
                ))}
            </ul>
        </Paper>
    )
}

Menu.defaultProps = {
    options: [],
}

Menu.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
}

export { Menu }
export default Menu
