import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'

import { Backdrop } from './Backdrop.js'
import { layers, spacers } from './theme.js'

const positioningPropType = propTypes.mutuallyExclusive(
    ['alignMiddle', 'alignBottom'],
    propTypes.bool
)

const Content = ({ children, alignMiddle, alignBottom }) => (
    <div className={cx({ alignMiddle, alignBottom })}>
        {children}
        <style jsx>{`
            div {
                position: absolute;
                left: 50%;
                width: auto;
                height: auto;
            }

            {/* default alignment; alignTop */''}
            div {
                top: ${spacers.dp64};
            }

            .alignMiddle {
                top: 50%;
            }

            .alignBottom {
                top: auto;
                bottom: ${spacers.dp64};
            }
        `}</style>
    </div>
)
Content.propTypes = {
    alignBottom: positioningPropType,
    alignMiddle: positioningPropType,
    children: propTypes.node,
}

/**
 * @module
 *
 * @param {ScreenCover.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { ScreenCover } from '@dhis2/ui-core'
 *
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/principles/spacing-alignment.md#stacking|Design system}
 * @see Live demo: {@link /demo/?path=/story/screencover--default|Storybook}
 */
const ScreenCover = ({
    children,
    onClick,
    className,
    dataTest,
    alignMiddle,
    alignBottom,
}) => {
    return (
        <Backdrop
            onClick={onClick}
            zIndex={layers.blocking}
            className={className}
            dataTest={dataTest}
        >
            <Content alignMiddle={alignMiddle} alignBottom={alignBottom}>
                {children}
            </Content>
        </Backdrop>
    )
}

ScreenCover.defaultProps = {
    dataTest: 'dhis2-uicore-screencover',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {function} [onClick]
 * @prop {string} [className]
 * @prop {Node} [children]
 * @prop {string} [dataTest]
 */
ScreenCover.propTypes = {
    alignBottom: positioningPropType,
    alignMiddle: positioningPropType,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    onClick: propTypes.func,
}

export { ScreenCover }
