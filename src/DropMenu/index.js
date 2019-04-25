import React from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

const DropMenu = ({ component, className }) =>
    ReactDOM.createPortal(
        <div className={className}>
            {component}

            <style jsx>{`
                div {
                    z-index: 1000;
                    position: absolute;
                }
            `}</style>
        </div>,
        document.body
    )

DropMenu.propTypes = {
    className: propTypes.string,

    /** The component to use as the dropdown component */
    component: propTypes.element,
}

export { DropMenu }
