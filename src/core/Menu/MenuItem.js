import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from './index'
import s from './styles'

function SubMenu({ size, width, list, onClick }) {
    return (
        <div className={s('sub-menu')}>
            <Menu size={size} width={width} list={list} onClick={onClick} />
        </div>
    )
}

export default function MenuItem({
    label,
    value,
    icon,
    list,
    active,
    disabled,
    size,
    width,
    onClick,
}) {
    const hasMenu = list.length > 0
    return (
        <li
            className={s('item', { disabled, active })}
            onClick={evt => {
                evt.preventDefault()
                evt.stopPropagation()
                onClick(value)
            }}
        >
            {icon && <Icon name={icon} className={s('icon')} />}
            <div className={s('label')}>{label}</div>
            {hasMenu && <Icon name="chevron_right" className={s('chevron')} />}
            {hasMenu && (
                <SubMenu
                    size={size}
                    width={width}
                    list={list}
                    onClick={onClick}
                />
            )}
        </li>
    )
}

MenuItem.defaultProps = {
    icon: '',
    list: [],
    active: false,
    disabled: false,
}

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    list: PropTypes.array,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
