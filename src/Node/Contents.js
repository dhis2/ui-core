import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

export const Contents = ({ children, open }) => (
    <div className={cx({ open })}>
        {children}

        <style jsx>{`
            div {
                height: 0;
                overflow: hidden;
                flex-grow: 1;
            }

            .open {
                height: auto;
            }
        `}</style>
    </div>
)

Contents.propTypes = {
    children: propTypes.node,
    open: propTypes.bool,
}
