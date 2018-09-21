import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo'
import NotificationIcon from './NotificationIcon'
import Apps from './Apps'
import Profile from './Profile'

import { bemClassNames } from '../utils'
import './styles.css'

const bem = bemClassNames('d2ui-headerbar');

function HeaderBar({ type, title, selection }) {
    return (
        <div className={bem.b(type)}>
            <div className="left">
                <div className="logo">
                    <Logo reverse={type === 'blue'} icon width={27.5} />
                </div>
                <div className="title">{title}</div>
            </div>
            {
                selection && (
                    <div className="current-selection">
                        {selection}
                    </div>
                )
            }
            <div className="right">
                <NotificationIcon icon="message" count={8} />
                <NotificationIcon icon="email" count={4} />
                <Apps />
                <Profile />
            </div>
        </div>
    )
}

HeaderBar.propTypes = {
    type: PropTypes.oneOf(['blue', 'white', 'transparent']),
    title: PropTypes.string,
    selection: PropTypes.string,
};

HeaderBar.defaultProps = {
    type: 'blue',
    title: 'Instance name',
    selection: 'ANC: 1-4 visits by districts this year',
};

export default HeaderBar;
