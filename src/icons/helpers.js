import React, { Fragment } from 'react'

export function createIcon(Icon, { action, className } = {}) {
    if (!Icon) return null

    return <Icon onClick={action || null} className={className || ''} />
}
