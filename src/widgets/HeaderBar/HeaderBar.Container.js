/** @format */

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
            const { systemName } = await get('system/info').then(r => r.json())
            const { modules } = await getAction(
                `dhis-web-commons/menu/getModules.action?_=${Date.now()}`
            )
                .then(r => r.text())
                .then(r => JSON.parse(r))
            const apps = modules.filter(
                m => typeof m.displayName !== 'undefined'
            )
            const i18n = await post(
                'i18n',
                JSON.stringify(apps.map(a => a.displayName || a.name))
            ).then(r => r.json())
            // const params =
            //     ':all,organisationUnits[id],userGroups[id],userCredentials[:all,!user,userRoles[id]'
            // const res = await get(`me?fields=${encodeURI(params)}`).then(r =>
            //     r.json()
            // )

            this.setState({
                title: systemName,
                apps: apps.map(a => ({
                    name: i18n[a.displayName || a.name],
                    path: appPath(a.defaultAction),
                    img: appIconPath(a.icon),
                })),
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
