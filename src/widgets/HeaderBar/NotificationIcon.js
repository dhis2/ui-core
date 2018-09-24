/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../core/Icon'

function NotificationIcon({ icon, count }) {
    return (
        <div className={`notification ${icon}`}>
            {count > 0 && <div className="count">{count}</div>}
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
