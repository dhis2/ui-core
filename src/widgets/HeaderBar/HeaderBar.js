/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../core/Logo'
import NotificationIcon from './NotificationIcon'
import Apps from './Apps'
import Profile from './Profile'

import { bemClassNames } from '../../utils'
import './styles.css'

const bem = bemClassNames('headerbar')

function HeaderBar({ type, title, selection, apps, profile }) {
    return (
        <header className={bem.b(type)}>
            <div className="left">
                <div className="logo">
                    <Logo
                        color={type === 'blue' ? 'white' : 'blue'}
                        type="icon"
                        width="27.5px"
                    />
                </div>
                <div className="title">{title}</div>
            </div>
            {selection && <div className="current-selection">{selection}</div>}
            <div className="right">
                <NotificationIcon icon="message" count={8} />
                <NotificationIcon icon="email" count={4} />
                <Apps apps={apps} />
                <Profile profile={profile} />
            </div>
        </header>
    )
}

HeaderBar.propTypes = {
    type: PropTypes.oneOf(['blue', 'white', 'transparent']),
    title: PropTypes.string,
    selection: PropTypes.string,
    apps: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            email: PropTypes.string,
            src: PropTypes.string,
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
