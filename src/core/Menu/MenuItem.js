import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from './index'
import s from './styles'

export default function MenuItem({
    label,
    value,
    icon,
    list,
    disabled,
    onClick,
}) {
    return (
        <li
            className={s('li', { [disabled]: disabled })}
            onClick={() => onClick(value)}
        >
            {icon && <Icon name={icon} className={s('icon')} />}
            <div className={s('label')}>{label}</div>
            {list.length > 0 && <Menu list={list} />}
        </li>
    )
}

MenuItem.defaultProps = {
    icon: '',
    list: [],
    disabled: false,
}

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    list: PropTypes.array,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
}
