import React from 'react'
import PropTypes from 'prop-types'
import Paper from '../Paper'
import MenuItem from './MenuItem'

import s from './styles'

export function Menu({ kind, width, height, list, onClick }) {
    return (
        <Paper width={width}>
            <ul className={s('menu', kind)}>
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
                            kind={kind}
                            width={width}
                            height={height}
                            disabled={disabled}
                            onClick={onClick}
                        />
                    )
                })}
            </ul>
        </Paper>
    )
}

Menu.defaultProps = {
    width: '100%',
    kind: 'default',
}

Menu.propTypes = {
    width: PropTypes.string,
    list: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    kind: PropTypes.oneOf(['default', 'dense']),
}

export { MenuItem }
export default Menu
