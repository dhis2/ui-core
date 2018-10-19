import React from 'react'
import PropTypes from 'prop-types'

import { LogoIconWhite } from '../../core/Logo'
import NotificationIcon from './NotificationIcon'
import Apps from './Apps'
import Profile from './Profile'
import s from './styles'

function getTitle(instanceName, appName = '') {
    if (!appName) {
        return instanceName
    }

    return `${instanceName} - ${appName}`
}

function HeaderBar({
    baseURL,
    instanceName,
    appName,
    status,
    apps,
    profile,
    messages,
    interpretations,
}) {
    return (
        <header className={s('container', 'blue')}>
            <div className={s('first')}>
                <div className={s('logo')}>
                    <a href={`${baseURL}`}>
                        <LogoIconWhite />
                    </a>
                </div>
                <div className={s('title')}>
                    {getTitle(instanceName, appName)}
                </div>
            </div>
            <div className={s('last')}>
                <NotificationIcon
                    icon="message"
                    count={interpretations.count}
                />
                <NotificationIcon icon="email" count={messages.count} />
                <Apps apps={apps} />
                <Profile profile={profile} baseURL={baseURL} />
            </div>
        </header>
    )
}

HeaderBar.propTypes = {
    baseURL: PropTypes.string,
    instanceName: PropTypes.string.isRequired,
    appName: PropTypes.string,
    messages: PropTypes.shape({
        count: PropTypes.number,
    }),
    interpretations: PropTypes.shape({
        count: PropTypes.number,
    }),
    apps: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            path: PropTypes.string,
            img: PropTypes.string,
        })
    ),
    profile: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        src: PropTypes.string,
    }),
}

export { HeaderBar }
export default HeaderBar
