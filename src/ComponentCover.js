import cx from 'classnames'
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
const ComponentCover = ({
    children,
    className,
    dataTest,
    onClick,
    pointerEvents,
    translucent,
}) => (
    <div
        className={cx(className, { translucent })}
        onClick={onClick}
        data-test={dataTest}
    >
        {children}
        <style jsx>{`
            div {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: ${layers.applicationTop};
                pointer-events: ${pointerEvents};
            }
            div.translucent {
                background: rgba(33, 43, 54, 0.4);
            }
        `}</style>
    </div>
)

ComponentCover.defaultProps = {
    dataTest: 'dhis2-uicore-componentcover',
    pointerEvents: 'all',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 */
ComponentCover.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    pointerEvents: propTypes.oneOf(['all', 'none']),
    translucent: propTypes.bool,
    onClick: propTypes.func,
}

export { ComponentCover }
