import React, { Fragment } from 'react'
import propTypes from 'prop-types'
import { ChevronLeft, ChevronRight } from '../icons/Chevron'
import cx from 'classnames'
import { colors } from '../theme.js'

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
                display: inline-flex;
                justify-content: center;
                align-items: center;

                color: inherit;
                background-color: ${colors.white};
                border: none;
                border-bottom: 1px solid ${colors.grey400};
                outline: none;
                padding: 16px 16px 11px 16px;

                cursor: pointer;
            }

            .scroll-button :global(svg) {
                width: 20px;
                height: 20px;
                fill: ${colors.grey700};
                transition: opacity 150ms ease-in-out;
                opacity: 1;
            }

            .scroll-button:hover {
                /* Cheap ripple alternative to flash clicked tab */
                background-color: ${colors.grey100};
            }

            .scroll-button:active {
                /* Briefly highlight clicked button */
                background-color: ${colors.grey200};
            }

            .scroll-button.hidden {
                pointer-events: none;
            }

            .scroll-button.hidden :global(svg) {
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
