import React from 'react'
import css from 'styled-jsx/css'
import cx from 'classnames'

import { invertSide } from './helpers'
import { colors } from '../theme'

export const Content = React.forwardRef(
    ({ side, children, position, withArrow, adjustment }, ref) => (
        <div
            ref={ref}
            style={position}
            className={cx('container', {
                'with-arrow': withArrow,
                [`with-arrow-${invertSide(side)}`]: withArrow,
            })}
        >
            <div className="content">{children}</div>

            <style jsx>{`
                .container {
                    background: ${colors.white};
                    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
                    position: absolute;
                }

                .content {
                    position: relative;
                    z-index: 2;
                    max-height: 100vh;
                    overflow-y: auto;
                }

                .with-arrow:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: ${colors.white};
                    z-index: 1;
                }

                .with-arrow:before {
                    content: '';
                    background: ${colors.white};
                    position: absolute;
                    z-index: 0;
                    box-shadow: 0 0 3px black;

                    ${/**
                     * Pythagoras theorem in a square
                     * s^2 + s^2 = d^2 (s = side, d = diagonal)
                     *
                     * diagonal = 10px
                     * => side ~= 7px
                     */ ''}
                    width: 7px;
                    height: 7px;
                }

                .with-arrow-top:before {
                    top: -3px;
                    left: calc(50% + ${adjustment.adjustmentHorizontal}px);
                    transform: translateX(-50%) rotate(45deg);
                }

                .with-arrow-bottom:before {
                    bottom: -3px;
                    left: calc(50% + ${adjustment.adjustmentHorizontal}px);
                    transform: translateX(-50%) rotate(45deg);
                }

                .with-arrow-right:before {
                    right: -3px;
                    top: calc(50% + ${adjustment.adjustmentVertical}px);
                    transform: translateY(-50%) rotate(45deg);
                }

                .with-arrow-left:before {
                    left: -3px;
                    top: calc(50% + ${adjustment.adjustmentVertical}px);
                    transform: translateY(-50%) rotate(45deg);
                }
            `}</style>
        </div>
    )
)
