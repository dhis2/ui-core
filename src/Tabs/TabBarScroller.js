import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import { ChevronLeft, ChevronRight } from '../icons/Chevron'
import cx from 'classnames'

const TabBarScroller = ({
    marginBottom,
    scrollAreaRef,
    scrollBoxRef,
    scrolledToEnd,
    scrolledToStart,
    scrollLeft,
    scrollRight,
    children,
}) => (
    <Fragment>
        <button
            onClick={scrollLeft}
            className={cx('scroll-button', {
                hidden: scrolledToStart,
            })}
        >
            <ChevronLeft />
        </button>
        <div className="scroll-box-clipper">
            <div
                className="scroll-box"
                ref={scrollBoxRef}
                style={{ marginBottom }}
            >
                <div className={'scroll-area'} ref={scrollAreaRef}>
                    {children}
                </div>
            </div>
        </div>
        <button
            onClick={scrollRight}
            className={cx('scroll-button', {
                hidden: scrolledToEnd,
            })}
        >
            <ChevronRight />
        </button>
    </Fragment>
)

const refPropType = propTypes.shape({ current: propTypes.instanceOf(Element) })

TabBarScroller.propTypes = {
    marginBottom: propTypes.number.isRequired,
    scrollAreaRef: refPropType,
    scrollBoxRef: refPropType,
    scrolledToEnd: propTypes.bool.isRequired,
    scrolledToStart: propTypes.bool.isRequired,
    scrollLeft: propTypes.func.isRequired,
    scrollRight: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
}

export { TabBarScroller }
