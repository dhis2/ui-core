/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import NotificationIcon from './NotificationIcon'
import Apps from './Apps'
import Profile from './Profile'

import { bemClassNames } from '../utils'
import './styles.css'

const bem = bemClassNames('d2ui-headerbar')

function HeaderBar({ type, title, selection, name, email, src }) {
    return (
        <div className={bem.b(type)}>
            <div className="left">
                <div className="logo">
                    <Logo reverse={type === 'blue'} icon width={27.5} />
                </div>
                <div className="title">{title}</div>
            </div>
            {selection && <div className="current-selection">{selection}</div>}
            <div className="right">
                <NotificationIcon icon="message" count={8} />
                <NotificationIcon icon="email" count={4} />
                <Apps />
                <Profile name={name} email={email} src={src} />
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

export default HeaderBar
