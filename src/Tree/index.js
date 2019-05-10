import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import css from 'styled-jsx/css'

export const Label = ({ icon, children }) => (
    <div className={cx('label')}>{children}</div>
)

const Arrow = ({ hasLeafes, open }) => {
    const arrowIcon = hasLeafes ? open ? <ArrowUp /> : <ArrowDown /> : null

    return (
        <div className={cx('arrow', { 'has-leafes': hasLeafes })}>
            {arrowIcon}
        </div>
    )
}

export const Tree = ({ children, open }) => {
    const hasLeafes = !!children
    const className = cx('tree', {
        open,
        'has-leafes': hasLeafes,
    })

    return (
        <div className={className}>
            <Arrow open={open} hasLeafes={hasLeafes} />
            {children}
        </div>
    )
}

Tree.propTypes = {
    open: propTypes.bool,
}

Tree.Label = Label
