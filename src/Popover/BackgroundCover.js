import React from 'react'
import propTypes from 'prop-types'

export const BackgroundCover = ({ onClick }) => (
    <div onClick={onClick}>
        <style jsx>{`
            div {
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }
        `}</style>
    </div>
)

BackgroundCover.propTypes = {
    onClick: propTypes.func.isRequired,
}
