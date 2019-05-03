import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { colors } from '../theme'

export const Label = ({ required, children }) => {
    const className = cx('label', { required })

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
            `}</style>
        </span>
    )
}

Label.propTypes = {
    required: PropTypes.bool.isRequired,
}
