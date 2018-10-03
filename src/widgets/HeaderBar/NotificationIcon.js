/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../core/Icon'
import { t } from '../../utils'
import s from './styles'

function NotificationIcon({ icon, count }) {
    return (
        <div className={s('notification', { icon })}>
            {count > 0 && (
                <div className={s('count', t('secondary-light-bg'))}>
                    {count}
                </div>
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
