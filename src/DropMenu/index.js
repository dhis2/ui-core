import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const DropMenu = ({ component, className }) => (
    <div className={className}>
        {component}

        <style jsx>{`
            div {
                z-index: 1000;
                position: absolute;
                top: 38px;
                left: 0;
            }
        `}</style>
    </div>
)

DropMenu.propTypes = {
    className: propTypes.string,

    /** The component to use as the dropdown component */
    component: propTypes.element,
}

export { DropMenu }
