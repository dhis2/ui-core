import React from 'react'
import PropTypes from 'prop-types'

export function Divider({ margin }) {
    const style = { margin }
    return (
        <div style={style} className="base">
            <style jsx>{`
                .base {
                    display: inline-block;
                    width: 100%;
                    height: 1px;
                    background-color: var(--grey300);
                }
            `}</style>
        </div>
    )
}

Divider.defaultProps = {
    margin: '8px 0',
}

Divider.propTypes = {
    margin: PropTypes.string,
}

export default Divider
