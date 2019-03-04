import React from 'react'
import PropTypes from 'prop-types'

import { LogoIconWhite } from '../../core/Logo'
import NotificationIcon from './NotificationIcon'

import Apps from './Apps'
import Profile from './Profile'

import cx from 'classnames'
import styles from './styles.js'

import css from 'styled-jsx/css'

const logotype = css.resolve`
    svg {    
        width: 27px;
        height: 25px;
        cursor: pointer;
    }
`

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
    apps,
    profile,
    messages,
    interpretations,
    className,
}) {
    return (
        <header className={cx('blue', className)}>
            <div>
                <div className="headerbar-logo">
                    <a href={`${baseURL}`}>
                        <LogoIconWhite className={logotype.className} />
                    </a>
                </div>
                <div className="headerbar-title">
                    {getTitle(instanceName, appName)}
                </div>
            </div>

            <div>
                <NotificationIcon
                    icon="message"
                    count={interpretations.count}
                    href={`${baseURL}/dhis-web-interpretation`}
                />
                <NotificationIcon
                    icon="email"
                    count={messages.count}
                    href={`${baseURL}/dhis-web-messaging`}
                />
                <Apps apps={apps} baseURL={baseURL} />
                <Profile profile={profile} baseURL={baseURL} />
            </div>

            {logotype.styles}
            <style jsx>{styles}</style>
        </header>
    )
}

HeaderBar.propTypes = {
    className: PropTypes.string,
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
