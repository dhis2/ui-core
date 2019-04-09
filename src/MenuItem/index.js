import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'

import { ChevronRight } from '../icons/Chevron.js'

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

const subMenu = css.resolve`
    div {
        display: none;
        position: absolute;
        top: 0;
        left: 100%;
        white-space: nowrap;
    }

    .item:hover > div {
        display: block;
    }
`

function SubMenu({ size, children, onClick, className }) {
    return <div className={className}>{children}</div>
}

export default function MenuItem({
    value,
    label,
    icon,
    children,
    active,
    disabled,
    size,
    onClick,
    className,
}) {
    const hasMenu = !!children
    return (
        <li
            className={cx('item', className, subMenu.className, {
                disabled,
                active,
            })}
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
            {subChevron.styles}

            {hasMenu && (
                <SubMenu size={size} className={subMenu.className}>
                    {children}
                </SubMenu>
            )}
            {subMenu.styles}

            <style jsx>{styles}</style>
        </li>
    )
}

MenuItem.defaultProps = {
    size: 'default',
    active: false,
    disabled: false,
}

MenuItem.propTypes = {
    label: propTypes.oneOf([propTypes.string, propTypes.element]).isRequired,
    value: propTypes.any.isRequired,
    className: propTypes.string,
    icon: propTypes.element,
    children: propTypes.element,
    active: propTypes.bool,
    disabled: propTypes.bool,
    size: propTypes.string,
    onClick: propTypes.func,
}
