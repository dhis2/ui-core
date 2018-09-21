/** @format */

import React from 'react'
import HeaderBar from 'ui/HeaderBar'

export default function HeaderBarDemo() {
    return (
        <div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="blue" />
            </div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="white" />
            </div>
            <div style={{ marginBottom: 20 }}>
                <HeaderBar type="transparent" />
            </div>
        </div>
    )
}
