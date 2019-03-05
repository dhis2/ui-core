import React from 'react'
import PropTypes from 'prop-types'
import Menu from './index'
import cx from 'classnames'
import styles from './styles'

import { ChevronRight } from '../../icons/Chevron.js'

import css from 'styled-jsx/css'

const subChevron = css.resolve`
    svg {
        margin: 0 -14px 0 auto;
        width: 18px;
        height: 18px;
        pointer-events: none;
        user-select: none;
    }
`

function SubMenu({ size, list, onClick, className }) {
    return (
        <div className={cx('sub-menu', className)}>
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
    className,
}) {
    const hasMenu = list.length > 0
    return (
        <li
            className={cx('item', className, { disabled, active })}
            onClick={evt => {
                if (onClick) {
                    evt.preventDefault()
                    evt.stopPropagation()
                    onClick(value)
                }
            }}
        >
            {icon}
            <div className="label">{label}</div>
            {hasMenu && <ChevronRight className={subChevron.className} />}
            {hasMenu && <SubMenu size={size} list={list} onClick={onClick} />}

            {subChevron.styles}
            <style jsx>{styles}</style>
        </li>
    )
}

MenuItem.defaultProps = {
    list: [],
    size: 'default',
    active: false,
    disabled: false,
}

MenuItem.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.element,
    list: PropTypes.array,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func,
}
