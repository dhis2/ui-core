import React from 'react'
import HeaderBar from './HeaderBar.Component'
import { get, post, getAction, serverURL } from '../../utils'

function appIconPath(path) {
    if (path.startsWith('http:') || path.startsWith('https:')) {
        return path
    }

    return `${serverURL}/api/${path}`
}

function appPath(path) {
    if (path.startsWith('http:') || path.startsWith('https:')) {
        return path
    }

    return `${serverURL}/api/${path}`
}

class HeaderBarContainer extends React.Component {
    state = {
        type: 'blue',
        title: '',
        selection: '',
        messages: {
            count: 0,
        },
        interpretations: {
            count: 0,
        },
        apps: [],
        profile: {
            name: '',
            email: '',
            src: '',
        },
    }

    async componentDidMount() {
        await this.fetch()
    }

    async fetch() {
        try {
            // DHIS2 host name
            const { systemName } = await get('system/info').then(r => r.json())

            // Apps
            const { modules } = await getAction(
                `dhis-web-commons/menu/getModules.action?_=${Date.now()}`
            )
                .then(r => r.text())
                .then(r => JSON.parse(r))
            const apps = modules.filter(
                m => typeof m.displayName !== 'undefined'
            )

            // Translations for module names
            const i18n = await post(
                'i18n',
                JSON.stringify(apps.map(a => a.name))
            ).then(r => r.json())

            // Interpretations and Unread messages count
            const {
                unreadInterpretations,
                unreadMessageConversations,
            } = await get('me/dashboard').then(r => r.json())

            // Profile info
            const me = await get('me.json').then(r => r.json())

            this.setState({
                title: systemName,
                messages: {
                    count: unreadMessageConversations,
                },
                interpretations: {
                    count: unreadInterpretations,
                },
                apps: apps.map(a => ({
                    name: i18n[a.name] || a.name,
                    path: appPath(a.defaultAction),
                    img: appIconPath(a.icon),
                })),
                profile: {
                    name: me.name,
                    email: me.email,
                },
            })
        } catch (e) {
            console.error('HeaderBar(fetch)', e)
        }
    }

    render() {
        const {
            type,
            title,
            selection,
            messages,
            interpretations,
            apps,
            profile,
        } = this.state
        return (
            <HeaderBar
                baseURL={serverURL}
                type={type}
                title={title}
                selection={selection}
                messages={messages}
                interpretations={interpretations}
                apps={apps}
                profile={profile}
            />
        )
    }
}

export { HeaderBarContainer }
export default HeaderBarContainer
