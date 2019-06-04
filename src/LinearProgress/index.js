import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'
import { theme } from '../theme.js'

const Progress = ({ amount }) => {
    return (
        <div>
            <style jsx>{`
                div {
                    width: ${amount}%;
                }
            `}</style>
            <style jsx>{`
                div {
                    background-color: ${theme.primary600};
                    transition: width 0.3s linear;
                    height: 4px;
                }

                .determinate {
                }
            `}</style>
        </div>
    )
}

const LinearProgress = ({ amount, width, margin, className }) => {
    return (
        <div role="progressbar" className={className}>
            <Progress amount={amount} />

            <style jsx>{`
                div {
                    display: block;
                    overflow: hidden;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    background-color: rgba(110, 122, 138, 0.2);
                }
            `}</style>
            <style jsx>{`
                width: ${width};
                margin: ${margin};
            `}</style>
        </div>
    )
}

LinearProgress.defaultProps = {
    amount: 0,
    margin: '10px',
    width: '300px',
}

LinearProgress.propTypes = {
    className: propTypes.string,
    /** set the progression in percentage (without the % suffix) */
    amount: propTypes.number,
    margin: propTypes.string,
    /** set the width of the entire indicator, e.g. '100%' or '300px'. */
    width: propTypes.string,
}

export { LinearProgress }
