import React from 'react'
import * as demos from '../demos'

const Components = {}
Object.keys(demos).forEach(k => (Components[demos[k].id] = demos[k]))

export default function View({ id }) {
    const Component = Components[id]
    if (!Component) {
        console.warn('not implemented (demo)', id)
        return null
    }

    return Component && <Component />
}
