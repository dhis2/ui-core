import React from 'react'
import propTypes from '@dhis2/prop-types'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {CenteredContent.PropTypes} props
 * @returns {React.Component}
 * @example import { CenteredContent } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/centeredcontent--default|Storybook}
 */
const CenteredContent = ({ className, dataTest, children }) => (
    <div className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
            }
        `}</style>
    </div>
)

CenteredContent.defaultProps = {
    dataTest: 'dhis2-uicore-centeredcontent',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 */
CenteredContent.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { CenteredContent }
