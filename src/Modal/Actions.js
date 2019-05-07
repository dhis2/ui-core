import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { Button } from '../index'

export const Actions = ({ children }) => (
    <div className={cx('actions')}>
        {children}

        <style jsx>{`
            .actions {
                padding: 0 24px 20px;
                display: flex;
                justify-content: flex-end;
            }
        `}</style>
    </div>
)

Actions.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
}
