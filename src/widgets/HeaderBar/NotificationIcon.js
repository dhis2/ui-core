/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../core/Icon'

import { bem } from './HeaderBar'

function NotificationIcon({ icon, count }) {
    return (
        <div className={bem.e('notification', icon)}>
            {count > 0 && (
                <div className={bem.e('notification-count')}>{count}</div>
            )}
            <Icon name={icon} />
        </div>
    )
}

NotificationIcon.propTypes = {
    count: PropTypes.number,
    icon: PropTypes.string.isRequired,
}

NotificationIcon.defaultProps = {
    count: 0,
}

export default NotificationIcon
