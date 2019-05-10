import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../theme'

export const Label = ({ htmlFor, disabled, required, children }) => {
    const className = cx('label', { disabled, required })

    return (
        <label className={className}>
            {children}

            <style jsx>{`
                .label {
                    color: ${colors.grey900};
                    cursor: pointer;
                }

                .required:after {
                    padding-left: 4px;
                    content: '*';
                }

                .disabled {
                    cursor: not-allowed;
                    color: ${theme.disabled};
                }
            `}</style>
        </label>
    )
}

Label.propTypes = {
    htmlFor: propTypes.string.isRequired,
    disabled: propTypes.bool,
    required: propTypes.bool,
}
