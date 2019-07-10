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
                flex-wrap: nowrap;
            }
        `}</style>
    </div>
)

TabBar.propTypes = {
    fixed: propTypes.bool,
}

export { TabBar }
