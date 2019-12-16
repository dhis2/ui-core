import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { ArrowDown } from '../icons/Arrow.js'
import { colors } from '../theme.js'

export const Arrow = ({ hasLeaves, open, onOpen, onClose }) => {
    const arrowIcon = hasLeaves ? <ArrowDown /> : <span />
    const onClick = open ? onClose : onOpen

    return (
        <div
            className={cx('tree__arrow', {
                open,
                'has-leaves': hasLeaves,
            })}
        >
            <span onClick={event => onClick && onClick({ open: !open }, event)}>
                {arrowIcon}
            </span>

            <style jsx>{`
                div {
                    width: 24px;
                    position: relative;
                    flex-shrink: 0;
                }
                div:after {
                    background: ${colors.grey400};
                    height: calc(100% - 24px);
                    left: 12px;
                    position: absolute;
                    top: 15px;
                    width: 1px;
                    z-index: 1;
                }
                .has-leaves.open:after {
                    content: '';
                }
                span {
                    display: block;
                    position: relative;
                    z-index: 2;
                    fill: ${colors.grey700};
                }
                div :global(svg) {
                    vertical-align: top;
                    transform: rotate(-90deg);
                }
                .open :global(svg) {
                    transform: rotate(0);
                }
            `}</style>
        </div>
    )
}

Arrow.propTypes = {
    hasLeaves: propTypes.bool,
    open: propTypes.bool,
    onClose: propTypes.func,
    onOpen: propTypes.func,
}
