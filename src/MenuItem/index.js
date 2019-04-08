import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles'

import Menu from '../Menu'
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
                    onClick()
                }
            }}
        >
            {icon}
            <div className="label">{label}</div>

            {hasMenu && <ChevronRight className={subChevron.className} />}
            {subChevron.styles}

            {hasMenu && (
                <SubMenu
                    size={size}
                    onClick={onClick}
                    className={subMenu.className}
                >
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
    className: PropTypes.string,
    label: PropTypes.oneOf([PropTypes.string, PropTypes.element]).isRequired,
    icon: PropTypes.element,
    children: PropTypes.instanceOf(Menu),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func,
}
