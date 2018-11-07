import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../core/Icon'
import { t } from '../../utils'
import s from './styles'

function NotificationIcon({ icon, count, href }) {
    return (
        <a className={s('notification', { icon })} href={href}>
            {count > 0 && (
                <span className={s('count', t('secondary-light-bg'))}>
                    {count}
                </span>
            )}
            <Icon name={icon} />
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
