import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors, theme } from '../theme'

export const Label = ({ disabled, required, children }) => {
    const className = cx('label', { disabled, required })

    return (
        <span className={className}>
            {children}

            <style jsx>{`
                .label {
                    margin: 0 0 0 8px;
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
        </span>
    )
}

Label.propTypes = {
    disabled: PropTypes.bool,
    required: PropTypes.bool,
}
