/** @format */

import React from 'react'
import Icon from '../../core/Icon'
import Paper from '../../core/Paper'

import { bem } from './HeaderBar'

function TextIcon({ name }) {
    let title = name[0]
    if (name.indexOf(' ') > 0) {
        title += name.split(' ')[1][0]
    }

    return (
        <div className={bem.e('icon')}>
            <div className={bem.e('initials')}>{title}</div>
        </div>
    )
}

function ImageIcon({ src }) {
    return (
        <div className={bem.e('icon')}>
            <img src={src} />
        </div>
    )
}

function Header({ name, email, img, onClick }) {
    return (
        <div className={bem.e('header')}>
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className={bem.e('details')}>
                <div className={bem.e('name')}>{name}</div>
                <div className={bem.e('email')}>{email}</div>
                <div
                    className={bem.e('edit_profile')}
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
        <div className={bem.e('menu')}>
            <Item name="settings" label="Settings" />
            <Item name="account_box" label="Account" />
            <Item name="help" label="Help" />
            <Item name="exit_to_app" label="Logout" />
        </div>
    )
}

function Item({ name, label }) {
    return (
        <div className={bem.e('item')} onClick={() => onClick(name)}>
            <Icon name={name} />
            <div className={bem.e('label')}>{label}</div>
        </div>
    )
}

function onClick(actionType) {
    console.log('onClick', actionType)
}

export default function Profile({ name, email, img }) {
    return (
        <div className={bem.e('profile')}>
            {img ? <ImageIcon src={img} /> : <TextIcon name={name} />}
            <div className={bem.e('contents')}>
                <Paper>
                    <Header
                        name={name}
                        img={img}
                        email={email}
                        onClick={onClick}
                    />
                    <div className={bem.e('divider')} />
                    <Menu />
                </Paper>
            </div>
        </div>
    )
}
