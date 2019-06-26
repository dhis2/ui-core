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
            <div className="scroll-box" ref={scrollBoxRef}>
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

        <style jsx>{`
            .scroll-box {
                margin-bottom: ${marginBottom}px;
            }
        `}</style>

        <style jsx>{`
            .scroll-button {
                flex: 0 0 3rem;
                color: inherit;
                border-radius: 8px;
                background-color: transparent;
                transition: all 150ms ease-in-out;
                border: none;
                outline: none;
                cursor: pointer;
                opacity: 1;
                transition: opacity 150ms ease-in-out;
                height: 4px;
            }

            .scroll-button:active {
                /* Cheap ripple alternative to flash clicked tab */
                background-color: #e0e0e0;
            }

            .scroll-button.hidden {
                pointer-events: none;
                opacity: 0;
            }

            .scroll-box-clipper {
                overflow-y: hidden;
            }

            .scroll-box {
                flex-grow: 1;
                overflow-x: scroll;
                -webkit-overflow-scrolling: touch;
                display: -ms-flexbox;
                display: flex;
            }

            .scroll-box::-webkit-scrollbar {
                display: none;
            }

            .scroll-area {
                position: relative;
                display: flex;
                flex: 1 0 auto;
                transform: none;
                will-change: transform;
            }

            @-moz-document url-prefix() {
                .tab-container {
                    /* Forces all the tabs to be on one line */
                    width: -moz-max-content;
                }
            }
        `}</style>
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
