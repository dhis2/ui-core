import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import MenuItem from './MenuItem'
import Divider from '../helpers/Divider'

import { rx } from './styles'

export function Menu({ size, width, list, onClick }) {
    return (
        <Card>
            <ul className={rx('base', size)}>
                {list.map(
                    (
                        { label, value, icon, list, active, type, disabled },
                        i
                    ) => {
                        if (type === 'divider') {
                            return <Divider key={`mid-${i}`} />
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
                                disabled={disabled}
                                active={active}
                                onClick={onClick}
                            />
                        )
                    }
                )}
            </ul>
        </Card>
    )
}

Menu.defaultProps = {
    size: 'default',
}

Menu.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf(['divider']),
            label: PropTypes.string,
            value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            list: PropTypes.array,
            icon: PropTypes.string,
            active: PropTypes.bool,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['default', 'dense']),
}

export { MenuItem }
export default Menu
