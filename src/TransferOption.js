import React from 'react'
import cx from 'classnames'
import propTypes from '@dhis2/prop-types'

import { colors } from './theme.js'

export const TransferOption = ({
    className,
    dataTest,
    error,
    label,
    marked,
    onClick,
    value,
}) => (
    <div
        data-test={dataTest}
        onClick={onClick}
        data-value={value}
        className={cx(className, { marked, error })}
    >
        {label}

        <style jsx>{`
            div {
                font-size: 14px;
                line-height: 16px;
                padding: 4px 8px;
                color: ${colors.grey900};
            }

            div:hover {
                background: ${colors.grey200};
            }

            div.marked {
                background: ${colors.teal700};
                color: ${colors.white};
            }

            div.error {
                background: ${colors.red200};
                color: ${colors.red800};
            }
        `}</style>
    </div>
)

TransferOption.defaultProps = {
    dataTest: 'dhis2-uicore-transferoption',
}

TransferOption.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    error: propTypes.bool,
    marked: propTypes.bool,
    onClick: propTypes.func,
}
