import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../core/Icon'
import Card from '../../core/Card'
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

function Menu({ baseURL }) {
    const list = [
        {
            name: 'settings',
            label: 'Settings',
            onClick: () => onClick(baseURL, 'settings'),
        },
        {
            name: 'account_box',
            label: 'Account',
            onClick: () => onClick(baseURL, 'account'),
        },
        {
            name: 'help',
            label: 'Help',
            onClick: () => onClick(baseURL, 'help'),
        },
        {
            name: 'exit_to_app',
            label: 'Logout',
            onClick: () => onClick(baseURL, 'logout'),
        },
    ]

    return (
        <nav>
            {list.map(({ name, label, onClick }) => (
                <Item
                    key={`profile-mi-${name}`}
                    name={name}
                    label={label}
                    onClick={onClick}
                />
            ))}
        </nav>
    )
}

Menu.propTypes = {
    baseURL: PropTypes.string,
}

function Item({ name, label, onClick }) {
    return (
        <div className={s('item')} onClick={onClick}>
            <Icon name={name} />
            <div className={s('label')}>{label}</div>
        </div>
    )
}

Item.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

function onClick(baseURL, actionType) {
    const paths = {
        edit_profile: `${baseURL}/dhis-web-user-profile/#/profile`,
        settings: `${baseURL}/dhis-web-user-profile/#/settings`,
        account: `${baseURL}/dhis-web-user-profile/#/account`,
        help:
            'https://docs.dhis2.org/master/en/user/html/dhis2_user_manual_en.html',
        logout: `${baseURL}/dhis-web-commons-security/logout.action`,
    }

    if (typeof paths[actionType] !== 'undefined') {
        window.location = paths[actionType]
    } else {
        console.warn('onClick: not implemented', actionType)
    }
}

export default function Profile({ baseURL, profile: { name, email, img } }) {
    return (
        <div className={s('profile')}>
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className={s('contents')}>
                <Card>
                    <Header
                        name={name}
                        email={email}
                        img={img}
                        baseURL={baseURL}
                        onClick={() => onClick(baseURL)}
                    />
                    <div className={s('divider')} />
                    <Menu baseURL={baseURL} />
                </Card>
            </div>
        </div>
    )
}

Profile.propTypes = {
    baseURL: PropTypes.string,
    profile: PropTypes.object,
}
