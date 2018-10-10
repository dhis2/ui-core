import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from './index'
import s from './styles'

function SubMenu({ kind, width, list, onClick }) {
    return (
        <div className={s('sub-menu')}>
            <Menu kind={kind} width={width} list={list} onClick={onClick} />
        </div>
    )
}

export default function MenuItem({
    label,
    value,
    icon,
    list,
    disabled,
    kind,
    width,
    onClick,
}) {
    const hasMenu = list.length > 0
    return (
        <li
            className={s('item', { [disabled]: disabled })}
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
                    kind={kind}
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
    disabled: false,
}

MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    list: PropTypes.array,
    disabled: PropTypes.bool,
    kind: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}
