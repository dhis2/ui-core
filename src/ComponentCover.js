import React from 'react'
import propTypes from '@dhis2/prop-types'
import { layers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {ComponentCover.PropTypes} props
 * @returns {React.Component}
 * @example import { ComponentCover } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/componentcover--circularloader|Storybook}
 */
const ComponentCover = ({ children, className, dataTest, transparent }) => (
    <div className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            div {
                background: ${transparent
                    ? 'transparent'
                    : 'rgba(33, 43, 54, 0.4)'};
                z-index: ${layers.applicationTop - 1};
            }
        `}</style>
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
        `}</style>
    </div>
)

ComponentCover.defaultProps = {
    dataTest: 'dhis2-uicore-componentcover',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 * @prop {boolean} [transparent]
 */
ComponentCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    transparent: propTypes.bool,
}

export { ComponentCover }
