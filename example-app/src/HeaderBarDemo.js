/** @format */

import React from 'react'
import HeaderBar from 'ui/HeaderBar'

const props = {
    title: 'Demo - Sierra Leone',
    selection: 'ANC: 1-4 visits by districts this year',
    name: 'John Doe',
    email: 'john_doe@dhis2.org'
}

export default function HeaderBarDemo() {
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="blue" {...props} />
            </div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="white" {...props} />
            </div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="transparent" {...props} />
            </div>
        </div>
    )
}
