/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../core/Icon'
import Paper from '../../core/Paper'

function TextIcon({ name }) {
    let title = name[0]
    if (name.indexOf(' ') > 0) {
        title += name.split(' ')[1][0]
    }

    return (
        <div className="icon">
            <div className="initials">{title}</div>
        </div>
    )
}

TextIcon.propTypes = {
    name: PropTypes.string,
}

function ImageIcon({ src }) {
    return (
        <div className="icon">
            <img src={src} />
        </div>
    )
}

ImageIcon.propTypes = {
    src: PropTypes.string,
}

function Header({ name, email, img, onClick }) {
    return (
        <div className="header">
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className="details">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
                <div
                    className="edit_profile"
                    onClick={() => onClick('edit_profile')}
                >
                    Edit profile
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    img: PropTypes.string,
    onClick: PropTypes.func,
}

function Menu() {
    return (
        <nav>
            <Item name="settings" label="Settings" />
            <Item name="account_box" label="Account" />
            <Item name="help" label="Help" />
            <Item name="exit_to_app" label="Logout" />
        </nav>
    )
}

function Item({ name, label }) {
    return (
        <div className="item" onClick={() => onClick(name)}>
            <Icon name={name} />
            <div className="label">{label}</div>
        </div>
    )
}

Item.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
}

function onClick(actionType) {
    console.log('onClick', actionType)
}

export default function Profile({ profile: { name, email, img } }) {
    return (
        <div className="profile">
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className="contents">
                <Paper>
                    <Header
                        name={name}
                        email={email}
                        img={img}
                        onClick={onClick}
                    />
                    <div className="divider" />
                    <Menu />
                </Paper>
            </div>
        </div>
    )
}

Profile.propTypes = {
    profile: PropTypes.object,
}
