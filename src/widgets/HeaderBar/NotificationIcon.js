import React from 'react'
import PropTypes from 'prop-types'

import cx from 'classnames'
import styles from './styles.js'

import { colors } from '../../core/theme.js'

function NotificationIcon({ count, href, children }) {
    return (
        <a className="notification" href={href}>
            {count > 0 && <span className={cx('count')}>{count}</span>}
            {children}
            <style jsx>{styles}</style>
        </a>
    )
}

NotificationIcon.defaultProps = {
    count: 0,
}

NotificationIcon.propTypes = {
    children: PropTypes.element,
    href: PropTypes.string.isRequired,
    count: PropTypes.number,
}

export default NotificationIcon
