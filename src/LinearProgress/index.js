import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { theme } from '../theme.js'

const Progress = ({ indeterminate, amount }) => {
    const width = amount ? `width: ${amount}%;` : ''
    const height = '4px'

    return (
        <div
            className={cx({
                determinate: !!width,
                indeterminate: !width,
            })}
        >
            <style jsx>{`
                div {
                    ${width}
                }
            `}</style>
            <style jsx>{`
                div {
                    background-color: ${theme.primary600};
                    transition: width 0.3s linear;
                    height: ${height};
                }

                .determinate {
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .indeterminate:before {
                    position: absolute;
                    height: ${height};
                    top: 0;
                    left: 0;

                    background-color: inherit;
                    animation: anim-indeterminate 2.1s
                        cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
                    content: '';
                    will-change: left, right;
                }

                .indeterminate:after {
                    position: absolute;
                    height: ${height};
                    top: 0;
                    left: 0;

                    background-color: inherit;
                    animation: anim-indeterminate-short 2.1s
                        cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
                    animation-delay: 1.15s;
                    content: '';
                    will-change: left, right;
                }

                @keyframes anim-indeterminate {
                    0% {
                        right: 100%;
                        left: -35%;
                    }

                    60% {
                        right: -90%;
                        left: 100%;
                    }

                    100% {
                        right: -90%;
                        left: 100%;
                    }
                }

                @keyframes anim-indeterminate-short {
                    0% {
                        right: 100%;
                        left: -200%;
                    }

                    60% {
                        right: -8%;
                        left: 107%;
                    }

                    100% {
                        right: -8%;
                        left: 107%;
                    }
                }
            `}</style>
        </div>
    )
}

const LinearProgress = ({ amount, margin = '10px', className }) => {
    return (
        <div role="progressbar" className={className}>
            <Progress amount={amount} />

            <style jsx>{`
                div {
                    display: block;

                    overflow: hidden;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    background-color: ${theme.primary050};
                }
            `}</style>
            <style jsx>{`
                margin: ${margin};
            `}</style>
        </div>
    )
}

LinearProgress.propTypes = {
    className: propTypes.string,
    amount: propTypes.number,
    margin: propTypes.string,
}

export { LinearProgress }
