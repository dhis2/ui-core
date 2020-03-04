import React from 'react'
import propTypes from 'prop-types'

import { borderColor, borderRadius } from './common.js'
import { colors } from '../theme.js'

export const Button = ({ children, label, dataTest, disabled, onClick }) => (
    <button disabled={disabled} data-test={dataTest} onClick={onClick}>
        {children}

        {label && <span>{label}</span>}

        <style jsx>{`
            button {
                align-self: center;
                display: flex;
                border: 1px solid ${borderColor};
                border-radius: ${borderRadius};
                height: 32px;
                min-width: 32px;
                background: none;
                cursor: pointer;
                align-items: center;
                justify-content: center;
            }

            button + button {
                margin-top: 8px;
            }

            span {
                color: ${colors.grey900};
                display: inline-block;
                font-size: 14px;
                margin-left: 4px;
            }
        `}</style>
    </button>
)

Button.propTypes = {
    children: propTypes.node.isRequired,
    dataTest: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool,
    label: propTypes.string,
}
