import React from 'react'
import { iconPropType } from '../common-prop-types'
import { styles } from './styles.js'

export function Close({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
            <style jsx>{styles}</style>
        </svg>
    )
}
Close.propTypes = iconPropType
