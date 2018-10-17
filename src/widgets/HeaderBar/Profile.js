import React from 'react'
import PropTypes from 'prop-types'
import { Card, MenuItem, Divider } from '../../core'
import s from './styles'
import { isPointInRect } from '../../utils'

function TextIcon({ name, onClick }) {
    let title = name[0]
    if (name.indexOf(' ') > 0) {
        title += name.split(' ')[1][0]
    }

    return (
        <div className={s('icon')} onClick={onClick}>
            <div className={s('initials')}>{title}</div>
        </div>
    )
}

TextIcon.defaultProps = {
    onClick: undefined,
}

TextIcon.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

function ImageIcon({ src, onClick }) {
    return (
        <div className={s('icon')} onClick={onClick}>
            <img src={src} />
        </div>
    )
}

ImageIcon.defaultProps = {
    onClick: undefined,
}

ImageIcon.propTypes = {
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func,
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
    state = {
        show: false,
    }

    componentDidMount() {
        document.addEventListener('click', this.onDocClick)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onDocClick)
    }

    onDocClick = evt => {
        if (this.elContainer && this.elContents) {
            const target = { x: evt.clientX, y: evt.clientY }
            const contents = this.elContents.getBoundingClientRect()
            const container = this.elContainer.getBoundingClientRect()

            if (
                !isPointInRect(target, contents) &&
                !isPointInRect(target, container)
            ) {
                this.setState({ show: false })
            }
        }
    }

    onToggle = () => this.setState({ show: !this.state.show })

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

    viewIcon() {
        if (this.props.profile.img) {
            return (
                <ImageIcon
                    src={this.props.profile.img}
                    onClick={this.onToggle}
                />
            )
        }

        return (
            <TextIcon name={this.props.profile.name} onClick={this.onToggle} />
        )
    }

    viewContents() {
        if (!this.state.show) {
            return null
        }

        return (
            <div className={s('contents')} ref={c => (this.elContents = c)}>
                <Card height="298px">
                    <Header
                        baseURL={this.props.baseURL}
                        img={this.props.profile.img}
                        name={this.props.profile.name}
                        email={this.props.profile.email}
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
        )
    }

    render() {
        return (
            <div className={s('profile')} ref={c => (this.elContainer = c)}>
                {this.viewIcon()}
                {this.viewContents()}
            </div>
        )
    }
}

Profile.propTypes = {
    baseURL: PropTypes.string,
    profile: PropTypes.object,
}
