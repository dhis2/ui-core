import React from 'react'
import propTypes from 'prop-types'
import { Card } from '../Card'
import cx from 'classnames'

import styles from './styles'

function Menu({ size, children, className }) {
    return (
        <Card>
            <ul className={cx('base', size, className)}>{children}</ul>
            <style jsx>{styles}</style>
        </Card>
    )
}

Menu.defaultProps = {
    size: 'default',
}

Menu.propTypes = {
    className: propTypes.string,
    children: propTypes.arrayOf(propTypes.element).isRequired,
    size: propTypes.oneOf(['default', 'dense']),
}

export { Menu }
