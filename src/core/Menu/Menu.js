/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Card from '../Card'

import s from './styles'

function Menu({ width, height, list, onSelect, onClose, children }) {
    if (children) {
        return (
            <Card width={width} height={height}>
                <ul className={s('container')}>{children}</ul>
            </Card>
        )
    }

    return (
        <Card width={width} height={height}>
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
        </Card>
    )
}

Menu.defaultProps = {
    options: [],
    width: 'inherit',
    height: 'inherit',
}

Menu.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    list: PropTypes.array,
    onSelect: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element),
}

export { Menu }
export default Menu
