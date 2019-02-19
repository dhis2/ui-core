import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Menu from './index'
import cx from 'classnames'
import styles from './styles'

function SubMenu({ size, list, onClick }) {
    return (
        <div className={cx('sub-menu')}>
            <Menu size={size} list={list} onClick={onClick} />
            <style jsx>{styles}</style>
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
            className={cx('item', { disabled, active })}
            onClick={evt => {
                evt.preventDefault()
                evt.stopPropagation()
                onClick(value)
            }}
        >
            {icon && <Icon name={icon} className={cx('icon')} />}
            <div className={cx('label')}>{label}</div>
            {hasMenu && (
                <Icon name="chevron_right" className={cx('sub-chevron')} />
            )}
            {hasMenu && <SubMenu size={size} list={list} onClick={onClick} />}

            <style jsx>{styles}</style>
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
