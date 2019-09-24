import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { colors, theme, spacers } from '../theme.js'

export const Label = ({ disabled, required, children }) => {
    const className = cx('label', { disabled, required })

    return (
        <span className={className}>
            {children}

            <style jsx>{`
                .label {
                    margin: 0 0 0 2px;
                    color: ${colors.grey900};
                    cursor: pointer;
                }

                .required:after {
                    padding-left: ${spacers.dp4};
                    content: '*';
                }

                .disabled {
                    cursor: not-allowed;
                    color: ${theme.disabled};
                }
            `}</style>
        </span>
    )
}

Label.propTypes = {
    children: propTypes.oneOfType([propTypes.string, propTypes.number]),
    disabled: propTypes.bool,
    required: propTypes.bool,
}
