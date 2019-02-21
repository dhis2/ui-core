import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../core/Icon'
import { t } from '../utils'

import cx from 'classnames'
import styles from './styles.js'

function NotificationIcon({ icon, count, href }) {
    return (
        <a className={cx('notification', { icon })} href={href}>
            {count > 0 && <span className={cx('count')}>{count}</span>}
            <Icon name={icon} />
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
