import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

const InnerTabBar = ({ fixed, children }) => (
    <div
        className={cx({
            fixed,
        })}
    >
        {children}
        <style jsx>{`
            div {
                position: relative;
                overflow: hidden;
            }
            div.fixed {
                display: flex;
                flex-grow: 1;
                overflow-x: hidden;
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
    fixed: propTypes.bool.isRequired,
}

export { InnerTabBar }
