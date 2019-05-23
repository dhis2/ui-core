import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import { FALLBACKS } from './fallbacks'

export const Content = React.forwardRef(
    ({ children, position, level }, ref) => (
        <div ref={ref} style={position}>
            {children}

            <style jsx>{`
                div {
                    background: white;
                    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
                    max-height: 100vh;
                    overflow-y: auto;
                    position: fixed;
                    z-index: ${level + 2000 || 1};
                }
            `}</style>
        </div>
    )
)

export const getScrollAndClientOffset = () => {
    const body = document.body
    const docEl = document.documentElement

    return {
        scrollTop: window.pageYOffset || docEl.scrollTop || body.scrollTop,
        scrollLeft: window.pageXOffset || docEl.scrollLeft || body.scrollLeft,
        clientTop: docEl.clientTop || body.clientTop || 0,
        clientLeft: docEl.clientLeft || body.clientLeft || 0,
    }
}

export const getPosition = ({
    pop,
    anchor,
    popPoint,
    anchorPoint,
    isNotRoot,
}) => {
    if (!anchor || !pop) {
        return { left: 'auto', top: 'auto' }
    }

    const anchorRect = anchor.getBoundingClientRect()
    const popRect = pop.getBoundingClientRect()
    const relativePosition = getRelativePosition(
        anchorRect,
        popRect,
        anchorPoint,
        popPoint
    )
    const [realAnchorPoint, realPopPoint] = relativePosition

    return {
        ...getPositionHorizontal(
            anchorRect,
            popRect,
            realAnchorPoint,
            realPopPoint
        ),
        ...getPositionVertical(
            anchorRect,
            popRect,
            realAnchorPoint,
            realPopPoint,
            isNotRoot
        ),
    }

    return styles
}

const getRelativePosition = (anchorRect, popRect, anchorPoint, popPoint) => {
    const startRotation = [anchorPoint, popPoint]
    const startRotationIndex = FALLBACKS.findIndex(
        ([anchor, pop]) =>
            anchor.vertical === startRotation[0].vertical &&
            anchor.horizontal === startRotation[0].horizontal &&
            pop.vertical === startRotation[1].vertical &&
            pop.horizontal === startRotation[1].horizontal
    )
    const updatedRotation = [startRotation, ...FALLBACKS[startRotationIndex][2]]

    return (
        updatedRotation.reduce((finalPosition, curPosition) => {
            if (finalPosition) return finalPosition

            let [curAnchorPoint, curPopPoint] = curPosition

            if (
                doesPositionFitOnScreen(
                    anchorRect,
                    popRect,
                    curAnchorPoint,
                    curPopPoint
                )
            ) {
                return curPosition
            }

            return finalPosition
        }, null) || startRotation
    )
}

const doesPositionFitOnScreen = (anchor, pop, anchorPoint, popPoint) =>
    doesPositionFitOnScreenVertically(anchor, pop, anchorPoint, popPoint) &&
    doesPositionFitOnScreenHorizontally(anchor, pop, anchorPoint, popPoint)

const doesPositionFitOnScreenHorizontally = (
    anchor,
    pop,
    anchorPoint,
    popPoint
) => {
    const viewportWidth = window.innerWidth
    const { x: anchorX, width: anchorWidth } = anchor
    const { x: popX, width: popWidth } = pop
    const { horizontal: aHorizontal } = anchorPoint
    const { horizontal: pHorizontal } = popPoint

    if (aHorizontal === 'left' && pHorizontal === 'right') {
        return anchorX - popWidth >= 0
    }

    if (aHorizontal === 'center' && pHorizontal === 'right') {
        return anchorX + anchorWidth / 2 - popWidth >= 0
    }

    if (aHorizontal === 'right' && pHorizontal === 'right') {
        return anchorX + anchorWidth - popWidth >= 0
    }

    if (aHorizontal === 'left' && pHorizontal === 'left') {
        return anchorX + popWidth <= viewportWidth
    }

    if (aHorizontal === 'center' && pHorizontal === 'left') {
        return anchorX + anchorWidth / 2 + popWidth <= viewportWidth
    }

    if (aHorizontal === 'right' && pHorizontal === 'left') {
        return anchorWidth + anchorX + popWidth <= viewportWidth
    }

    if (aHorizontal === 'left' && pHorizontal === 'center') {
        return anchorX + popWidth / 2 <= viewportWidth
    }

    if (aHorizontal === 'center' && pHorizontal === 'center') {
        return anchorX + anchorWidth / 2 + popWidth / 2 <= viewportWidth
    }

    if (aHorizontal === 'right' && pHorizontal === 'center') {
        return anchorWidth + anchorX + popWidth / 2 <= viewportWidth
    }

    return false
}

const doesPositionFitOnScreenVertically = (
    anchor,
    pop,
    anchorPoint,
    popPoint
) => {
    const viewportHeight = window.innerHeight
    const { y: anchorY, width: anchorHeight } = anchor
    const { y: popY, width: popHeight } = pop
    const { vertical: aVertical } = anchorPoint
    const { vertical: pVertical } = popPoint

    if (aVertical === 'top' && pVertical === 'bottom') {
        return anchorY - popHeight >= 0
    }

    if (aVertical === 'center' && pVertical === 'bottom') {
        return anchorY + anchorHeight / 2 - popHeight >= 0
    }

    if (aVertical === 'bottom' && pVertical === 'bottom') {
        return anchorY + anchorHeight - popHeight >= 0
    }

    if (aVertical === 'top' && pVertical === 'top') {
        return anchorY + popHeight <= viewportHeight
    }

    if (aVertical === 'center' && pVertical === 'top') {
        return anchorY + anchorHeight / 2 + popHeight <= viewportHeight
    }

    if (aVertical === 'bottom' && pVertical === 'top') {
        return anchorHeight + anchorY + popHeight <= viewportHeight
    }

    if (aVertical === 'top' && pVertical === 'center') {
        return anchorY + popHeight / 2 <= viewportHeight
    }

    if (aVertical === 'center' && pVertical === 'center') {
        return anchorY + anchorHeight / 2 + popHeight / 2 <= viewportHeight
    }

    if (aVertical === 'bottom' && pVertical === 'center') {
        return anchorHeight + anchorY + popHeight / 2 <= viewportHeight
    }

    return false
}

const getPositionHorizontal = (anchorRect, popRect, anchorPoint, popPoint) => {
    let left
    const viewportWidth = window.innerWidth
    const { x: anchorX, width: anchorWidth } = anchorRect
    const { x: popX, width: popWidth } = popRect
    const { horizontal: aHorizontal } = anchorPoint
    const { horizontal: pHorizontal } = popPoint

    if (aHorizontal === 'left' && pHorizontal === 'right') {
        left = anchorX - popWidth
    }

    if (aHorizontal === 'center' && pHorizontal === 'right') {
        left = anchorX + anchorWidth / 2 - popWidth
    }

    if (aHorizontal === 'right' && pHorizontal === 'right') {
        left = anchorX + anchorWidth - popWidth
    }

    if (aHorizontal === 'left' && pHorizontal === 'left') {
        left = anchorX
    }

    if (aHorizontal === 'center' && pHorizontal === 'left') {
        left = anchorX + anchorWidth / 2
    }

    if (aHorizontal === 'right' && pHorizontal === 'left') {
        left = anchorWidth + anchorX
    }

    if (aHorizontal === 'left' && pHorizontal === 'center') {
        return anchorX - popWidth / 2
    }

    if (aHorizontal === 'center' && pHorizontal === 'center') {
        return anchorX + anchorWidth / 2 - popWidth / 2
    }

    if (aHorizontal === 'right' && pHorizontal === 'center') {
        return anchorWidth + anchorX - popWidth / 2
    }

    return { left: left || 0 }
}

const getPositionVertical = (
    anchorRect,
    popRect,
    anchorPoint,
    popPoint,
    isNotRootLevel
) => {
    let top = 'auto'
    const viewportHeight = window.innerHeight
    const { y: anchorY, height: anchorHeight } = anchorRect
    const { y: popY, height: popHeight } = popRect
    const { vertical: aVertical } = anchorPoint
    const { vertical: pVertical } = popPoint

    if (aVertical === 'top' && pVertical === 'bottom') {
        top = anchorY - popHeight
    }

    if (aVertical === 'center' && pVertical === 'bottom') {
        top = anchorY + anchorHeight / 2 - popHeight
    }

    if (aVertical === 'bottom' && pVertical === 'bottom') {
        top = anchorY + anchorHeight - popHeight
    }

    if (aVertical === 'top' && pVertical === 'top') {
        top = anchorY
    }

    if (aVertical === 'center' && pVertical === 'top') {
        top = anchorY + anchorHeight / 2
    }

    if (aVertical === 'bottom' && pVertical === 'top') {
        top = viewportHeight + anchorY
    }

    if (aVertical === 'top' && pVertical === 'center') {
        top = anchorY - popHeight / 2
    }

    if (aVertical === 'center' && pVertical === 'center') {
        top = anchorY + anchorHeight / 2 - popHeight / 2
    }

    if (aVertical === 'bottom' && pVertical === 'center') {
        top = anchorWidth + anchorY - popHeight / 2
    }

    return { top: top || 0 }
}

export const arePositionsEqual = (left, right) =>
    left.left === right.left &&
    left.top === right.top &&
    left.bottom === right.bottom

export const propPosition = propTypes.shape({
    vertical: propTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: propTypes.oneOf(['left', 'center', 'right']),
})
