/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../core/Logo'
import NotificationIcon from './NotificationIcon'
import Apps from './Apps'
import Profile from './Profile'

import { bemClassNames } from '../../utils'
import './styles.css'

export const bem = bemClassNames('headerbar')

function HeaderBar({ type, title, selection, name, email, src }) {
    return (
        <div className={bem.b(type)}>
            <div className={bem.e('left')}>
                <div className={bem.e('logo')}>
                    <Logo
                        color={type === 'blue' ? 'white' : 'blue'}
                        type="icon"
                        width="27.5px"
                    />
                </div>
                <div className={bem.e('title')}>{title}</div>
            </div>
            {selection && (
                <div className={bem.e('current-selection')}>{selection}</div>
            )}
            <div className={bem.e('right')}>
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

export { HeaderBar }
export default HeaderBar
