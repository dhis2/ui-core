import React from 'react'
import { iconPropType } from '../common-prop-types'
import { styles } from './styles.js'

export function FileUpload({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            <style jsx>{styles}</style>
        </svg>
    )
}

FileUpload.propTypes = iconPropType
