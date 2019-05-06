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

    li:hover > div {
        display: block;
    }
`

const SubMenu = ({ children, className }) => (
    <div className={className}>{children}</div>
)

const MenuItem = ({
    value,
    label,
    icon,
    children,
    active,
    disabled,
    dense,
    onClick,
    className,
}) => {
    const hasMenu = !!children
    return (
        <li
            className={cx(className, subMenu.className, {
                disabled,
                dense,
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
                <SubMenu className={subMenu.className}>{children}</SubMenu>
            )}
            {subMenu.styles}

            <style jsx>{styles}</style>
        </li>
    )
}

MenuItem.propTypes = {
    label: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired,

    value: propTypes.any,
    /** handler function called with `value` as the sole argument */
    onClick: propTypes.func,

    className: propTypes.string,
    children: propTypes.element,
    icon: propTypes.element,

    dense: propTypes.bool,
    active: propTypes.bool,
    disabled: propTypes.bool,
}

export { MenuItem }
