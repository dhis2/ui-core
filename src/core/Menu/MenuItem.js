import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from './index'
import cx, { rx } from './styles'

function SubMenu({ size, list, onClick }) {
    return (
        <div className={rx('sub-menu')}>
            <Menu size={size} list={list} onClick={onClick} />
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
    onClick,
}) {
    const hasMenu = list.length > 0
    return (
        <li
            className={rx('item', { disabled, active })}
            onClick={evt => {
                evt.preventDefault()
                evt.stopPropagation()
                onClick(value)
            }}
        >
            {icon && <Icon name={icon} className={cx('icon')} />}
            <div className={rx('label')}>{label}</div>
            {hasMenu && (
                <Icon name="chevron_right" className={cx('sub-chevron')} />
            )}
            {hasMenu && <SubMenu size={size} list={list} onClick={onClick} />}
        </li>
    )
}

MenuItem.defaultProps = {
    icon: '',
    list: [],
    size: 'default',
    active: false,
    disabled: false,
}

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string,
    list: PropTypes.array,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
