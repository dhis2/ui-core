import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import MenuItem from './MenuItem'

import s from './styles'

export function Menu({ size, width, list, onClick }) {
    return (
        <Card width={width}>
            <ul className={s('menu', size)}>
                {list.map(({ label, value, icon, list, type, disabled }, i) => {
                    if (type === 'divider') {
                        return <div key={`mid-${i}`} className={s('divider')} />
                    }

                    return (
                        <MenuItem
                            key={`mi-${value}`}
                            label={label}
                            value={value}
                            icon={icon}
                            list={list}
                            type={type}
                            size={size}
                            width={width}
                            disabled={disabled}
                            onClick={onClick}
                        />
                    )
                })}
            </ul>
        </Card>
    )
}

Menu.defaultProps = {
    width: '100%',
    size: 'default',
}

Menu.propTypes = {
    width: PropTypes.string,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['default', 'dense']),
}

export { MenuItem }
export default Menu
