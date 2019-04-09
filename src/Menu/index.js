import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import cx from 'classnames'

import styles from './styles'

export function Menu({ size, width, children, className }) {
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
    className: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    size: PropTypes.oneOf(['default', 'dense']),
}

export default Menu
