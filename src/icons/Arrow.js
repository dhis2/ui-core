import React from 'react'
import { iconPropType } from '../common-prop-types'
import { styles } from './styles.js'

export function ArrowDown({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M14 20l10 10 10-10z" />
            <style jsx>{styles}</style>
        </svg>
    )
}
ArrowDown.propTypes = iconPropType

export function ArrowUp({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M14 28l10-10 10 10z" />
            <style jsx>{styles}</style>
        </svg>
    )
}
ArrowUp.propTypes = iconPropType
