import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

const InnerTabBar = ({ cluster, contained, children }) => (
    <div
        className={cx('tab-container', {
            contained,
            // A scrollable tabBar cannot be clustered
            [`cluster-${cluster}`]: cluster && contained,
        })}
    >
        {children}
    </div>
)

InnerTabBar.propTypes = {
    cluster: propTypes.oneOf([null, 'left', 'centered', 'right']),
    contained: propTypes.bool,
}

export { InnerTabBar }
