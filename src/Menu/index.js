import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import MenuItem from '../MenuItem'
import Divider from '../Divider'
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
    children: PropTypes.arrayOf(
        PropTypes.oneOf([
            PropTypes.instanceOf(MenuItem),
            PropTypes.instanceOf(Divider),
        ])
    ).isRequired,
    size: PropTypes.oneOf(['default', 'dense']),
}

export { MenuItem }
export default Menu
