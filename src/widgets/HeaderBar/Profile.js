import React from 'react'
import PropTypes from 'prop-types'
import { Card, MenuItem, Divider } from '../../core'
import s from './styles'

function TextIcon({ name }) {
    let title = name[0]
    if (name.indexOf(' ') > 0) {
        title += name.split(' ')[1][0]
    }

    return (
        <div className={s('icon')}>
            <div className={s('initials')}>{title}</div>
        </div>
    )
}

TextIcon.propTypes = {
    name: PropTypes.string,
}

function ImageIcon({ src }) {
    return (
        <div className={s('icon')}>
            <img src={src} />
        </div>
    )
}

ImageIcon.propTypes = {
    src: PropTypes.string,
}

function Header({ name, email, img, baseURL }) {
    return (
        <div className={s('header')}>
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className={s('details')}>
                <div className={s('name')}>{name}</div>
                <div className={s('email')}>{email}</div>
                <a
                    className={s('edit_profile')}
                    href={`${baseURL}/dhis-web-user-profile/#/profile`}
                >
                    Edit profile
                </a>
            </div>
        </div>
    )
}

Header.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string,
    baseURL: PropTypes.string,
}

const list = [
    {
        icon: 'settings',
        label: 'Settings',
        value: 'settings',
    },
    {
        icon: 'account_box',
        label: 'Account',
        value: 'account',
    },
    {
        icon: 'help',
        label: 'Help',
        value: 'help',
    },
    {
        icon: 'exit_to_app',
        label: 'Logout',
        value: 'logout',
    },
]

export default class Profile extends React.Component {
    onClick = value => {
        const { baseURL } = this.props
        const paths = {
            edit_profile: `${baseURL}/dhis-web-user-profile/#/profile`,
            settings: `${baseURL}/dhis-web-user-profile/#/settings`,
            account: `${baseURL}/dhis-web-user-profile/#/account`,
            help:
                'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
            logout: `${baseURL}/dhis-web-commons-security/logout.action`,
        }

        if (typeof paths[value] !== 'undefined') {
            window.location = paths[value]
        } else {
            console.warn('onClick: not implemented', value)
        }
    }

    onHeaderClick = () => this.onClick('edit_profile')

    render() {
        const {
            baseURL,
            profile: { name, email, img },
        } = this.props
        return (
            <div className={s('profile')}>
                {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
                <div className={s('contents')}>
                    <Card height="298px">
                        <Header
                            name={name}
                            email={email}
                            img={img}
                            baseURL={baseURL}
                            onClick={this.onHeaderClick}
                        />
                        <Divider margin="13px 0 7px 0" />
                        {list.map(({ label, value, icon }) => (
                            <MenuItem
                                key={`h-mi-${value}`}
                                label={label}
                                value={value}
                                icon={icon}
                                onClick={this.onClick}
                            />
                        ))}
                    </Card>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    baseURL: PropTypes.string,
    profile: PropTypes.object,
}
