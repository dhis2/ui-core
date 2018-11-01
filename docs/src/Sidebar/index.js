import React from 'react'

import Logo from 'core/Logo'

function Title() {
    return (
        <div className="logo">
            <Logo />
            <span className="slogan">d2ui Design System</span>
        </div>
    )
}

export const list = [
    { id: 'overview', title: 'Overview' },
    { id: 'installation', title: 'Installation' },
    {
        id: 'atoms',
        title: 'Atoms',
        list: [
            { id: 'button', title: 'Button' },
            { id: 'card', title: 'Card' },
            { id: 'chip', title: 'Chip' },
            { id: 'color', title: 'Color' },
            {
                id: 'input-fields',
                title: 'Input Fields',
                list: [
                    { id: 'input-text', title: 'Text' },
                    { id: 'input-select', title: 'Select' },
                    { id: 'input-checkbox', title: 'Checkbox' },
                    { id: 'input-dropdown', title: 'Dropdown' },
                    { id: 'input-radio', title: 'Radio' },
                    { id: 'input-switch', title: 'Switch' },
                    { id: 'input-slider', title: 'Slider' },
                ],
            },
            { id: 'logo', title: 'Logo' },
            { id: 'menu', title: 'Menu' },
            { id: 'progress', title: 'Progress' },
            { id: 'segmented-control', title: 'Segmented Control' },
            { id: 'snackbar', title: 'Snackbar' },
            { id: 'tab', title: 'Tab' },
            { id: 'tooltip', title: 'Tooltip' },
            { id: 'typography', title: 'Typography' },
        ],
    },
    {
        id: 'molecules',
        title: 'Molecules',
        list: [
            { id: 'dialog', title: 'Dialog' },
            {
                id: 'org-tree',
                title: 'Org. Tree',
                list: [
                    { id: 'org-tree-simple', title: 'Simple' },
                    { id: 'Maintenance', title: 'Maintenance' },
                ],
            },
            { id: 'modal', title: 'Modal' },
            { id: 'table', title: 'Table' },
        ],
    },
    {
        id: 'organisms',
        title: 'Organisms',
        list: [{ id: 'headerbar', title: 'Header bar' }],
    },
]

function onClick(id) {
    const el = document.getElementById(`content-${id}`)
    if (el) {
        el.scrollIntoView()
    }
}

function Menu({ list }) {
    return (
        <ul>
            {list.map(({ title, id, list }) => (
                <li key={`mi-${id}`}>
                    <a onClick={() => onClick(id)}>{title}</a>
                    {list && <Menu list={list} />}
                </li>
            ))}
        </ul>
    )
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Title />
            <div className="menu">
                <Menu list={list} />
            </div>
        </div>
    )
}
