/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../core/Logo'
import NotificationIcon from './NotificationIcon'
import Apps from './Apps'
import Profile from './Profile'
import s from './styles'

function HeaderBar({
    type,
    baseURL,
    title,
    selection,
    apps,
    profile,
    messages,
    interpretations,
}) {
    return (
        <header className={s('container', type)}>
            <div className={s('first')}>
                <div className={s('logo')}>
                    <Logo
                        color={type === 'blue' ? 'white' : 'blue'}
                        type="icon"
                        width="27.5px"
                    />
                </div>
                <div className={s('title')}>{title}</div>
            </div>
            {selection && (
                <div className={s('current-selection')}>{selection}</div>
            )}
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
    type: PropTypes.oneOf(['blue', 'white', 'transparent']),
    title: PropTypes.string,
    selection: PropTypes.string,
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

HeaderBar.defaultProps = {
    type: 'blue',
}

export { HeaderBar }
export default HeaderBar
