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

function HeaderBar({ type, title, selection, profile }) {
    return (
        <div className={bem.b(type)}>
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
                <Apps />
                <Profile profile={profile} />
            </div>
        </div>
    )
}

HeaderBar.propTypes = {
    type: PropTypes.oneOf(['blue', 'white', 'transparent']),
    title: PropTypes.string,
    selection: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    src: PropTypes.string,
}

HeaderBar.defaultProps = {
    type: 'blue',
}

export { HeaderBar }
export default HeaderBar
