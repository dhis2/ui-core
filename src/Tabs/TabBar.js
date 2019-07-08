import React from 'react'
import propTypes from 'prop-types'
import { colors } from '../theme'
import cx from 'classnames'

const TabBar = ({ fixed, children }) => (
    <div className={cx('tab-bar', { fixed })}>
        {children}

        <style jsx>{`
            div {
                display: flex;
                align-items: flex-start;
                position: relative;
                overflow: hidden;
                box-shadow: inset 0 -1px 0 0 ${colors.grey400};
            }

            /* FIREFOX HACK */
            @-moz-document url-prefix() {
                div {
                    /* Forces all the tabs to be on one line */
                    width: -moz-max-content;
                }
            }
        `}</style>
    </div>
)

TabBar.propTypes = {
    fixed: propTypes.bool,
}

export { TabBar }
