/** @format */

import React from 'react'

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

export default function Apps() {
    return (
        <div className="profile">
            <TextIcon name="Adam Adam" />
        </div>
    )
}
