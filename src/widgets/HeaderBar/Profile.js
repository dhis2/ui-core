/** @format */

import React from 'react'
import Icon from '../../core/Icon/index'
import Paper from '../../core/Paper/index'

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

function ImageIcon({ src }) {
    return (
        <div className="icon">
            <img src={src} />
        </div>
    )
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

function Menu() {
    return (
        <div className="menu">
            <Item name="settings" label="Settings" />
            <Item name="account_box" label="Account" />
            <Item name="help" label="Help" />
            <Item name="exit_to_app" label="Logout" />
        </div>
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

function onClick(actionType) {
    console.log('onClick', actionType)
}

export default function Profile({ name, email, img }) {
    return (
        <div className="profile">
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className="contents">
                <Paper>
                    <Header
                        name={name}
                        img={img}
                        email={email}
                        onClick={onClick}
                    />
                    <div className="divider" />
                    <Menu />
                </Paper>
            </div>
        </div>
    )
}
