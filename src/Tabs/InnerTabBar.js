import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

const InnerTabBar = ({ cluster, contained, children }) => (
    <div
        className={cx({
            contained,
            // A scrollable tabBar cannot be clustered
            [`cluster-${cluster}`]: cluster && contained,
        })}
    >
        {children}
        <style jsx>{`
            div {
                position: relative;
                overflow-y: hidden;
            }

            div.contained {
                display: flex;
                flex-grow: 1;
                overflow-x: hidden;
            }

            div.cluster-left {
                justify-content: flex-start;
            }

            div.cluster-centered {
                justify-content: center;
            }

            div.cluster-right {
                justify-content: flex-end;
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

InnerTabBar.propTypes = {
    cluster: propTypes.oneOf([null, 'left', 'centered', 'right']),
    contained: propTypes.bool,
}

export { InnerTabBar }
