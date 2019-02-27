import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../core/Icon'

import cx from 'classnames'
import styles from './styles.js'

import { colors } from '../../core/colors.js'

import css from 'styled-jsx/css'

const notificationIcon = css.resolve`
    color: ${colors.white};
`

function NotificationIcon({ icon, count, href }) {
    return (
        <a className="notification" href={href}>
            {count > 0 && <span className={cx('count')}>{count}</span>}
            <Icon name={icon} className={notificationIcon.className} />
            {notificationIcon.styles}
            <style jsx>{styles}</style>
        </a>
    )
}

NotificationIcon.defaultProps = {
    count: 0,
}

NotificationIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    count: PropTypes.number,
}

export default NotificationIcon
