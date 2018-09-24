/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Paper from '../Paper/index'

import './menu.css'

const Menu = ({ options, selectHandler, closePopover, children }) => (
    <Paper elevation={4}>
        <ul className="d2ui-menu">
            {children
                ? children
                : options.map(({ onClick, ...rest }, index) => (
                      <MenuItem
                          key={`key-${index}`}
                          onClick={onClick || selectHandler}
                          closePopover={closePopover}
                          {...rest}
                      />
                  ))}
        </ul>
    </Paper>
)

Menu.propTypes = {
    options: PropTypes.array,
    selectHandler: PropTypes.func,
    closePopover: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
}

export default Menu
