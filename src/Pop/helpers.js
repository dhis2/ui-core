import React from 'react'
import propTypes from 'prop-types'
import css from 'styled-jsx/css'

import {
    doesElementFitInsideContainer,
    getElementInnerDimension,
    getElementOffset,
} from '../helpers/isElementInsideContainer'
import { FALLBACKS } from './fallbacks'

export const arePositionsEqual = (left, right) =>
    left.right === right.right &&
    left.left === right.left &&
    left.top === right.top &&
    left.bottom === right.bottom

export const Content = React.forwardRef(({ children, position }, ref) => (
    <div ref={ref} style={position}>
        {children}

        <style jsx>{`
            div {
                background: white;
                box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
                max-height: 100vh;
                overflow-y: auto;
                position: fixed;
            }
        `}</style>
    </div>
))

export const getPosition = ({ pop, anchor, side }) => {
    if (!anchor || !pop) {
        return { left: 'auto', top: 'auto' }
    }

    const styles = getRelativePosition(anchor, pop, side)

    if (styles === null) {
        return {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    }

    return styles
}

const getRelativePosition = (anchor, pop, side) => {
    let top, left, adjustmentVertical, adjustmentHorizontal
    const bodyWidth = getElementInnerDimension(document.body, 'horizontal')
    const bodyHeight = getElementInnerDimension(document.body, 'vertical')
    const anchorWidth = getElementInnerDimension(anchor, 'horizontal')
    const anchorHeight = getElementInnerDimension(anchor, 'vertical')
    const anchorOffset = getElementOffset(anchor)
    const popWidth = getElementInnerDimension(pop, 'horizontal')
    const popHeight = getElementInnerDimension(pop, 'vertical')

    if (!doesElementFitInsideContainer(pop, document.body)) return null

    if (side === 'left') {
        left = anchorOffset.left - popWidth
        top = anchorOffset.top + anchorHeight / 2 - popHeight / 2
        adjustmentVertical =
            top + popHeight > bodyHeight
                ? top + popHeight - bodyHeight
                : top < 0
                ? 0
                : top

        return {
            left: left < 0 ? 0 : left,
            top: top - adjustmentVertical,
        }
    }

    if (side === 'right') {
        left = anchorOffset.left + anchorWidth
        top = anchorOffset.top + anchorHeight / 2 - popHeight / 2
        adjustmentHorizontal = Math.max(0, left + popWidth - bodyWidth)
        adjustmentVertical =
            top + popHeight > bodyHeight
                ? top + popHeight - bodyHeight
                : top < 0
                ? 0
                : top

        return {
            left: left - adjustmentHorizontal,
            top: top - adjustmentVertical,
        }
    }

    if (side === 'top') {
        left = anchorOffset.left + anchorWidth / 2 - popWidth / 2
        top = anchorOffset.top - popHeight
        adjustmentHorizontal =
            left + popWidth > bodyWidth
                ? left + popWidth - bodyWidth
                : left < 0
                ? left
                : 0
        adjustmentVertical = top < 0 ? top : 0

        return {
            left: left - adjustmentHorizontal,
            top: top - adjustmentVertical,
        }
    }

    if (side === 'bottom') {
        left = anchorOffset.left + anchorWidth / 2 - popWidth / 2
        top = anchorOffset.top + anchorHeight
        adjustmentHorizontal =
            left + popWidth > bodyWidth
                ? left + popWidth - bodyWidth
                : left < 0
                ? left
                : 0
        adjustmentVertical = Math.max(0, top + popHeight - bodyHeight)

        return {
            left: left - adjustmentHorizontal,
            top: top - adjustmentVertical,
        }
    }

    throw new Error(
        `Position provided to getPosition must be "top", "right", "bottom" or "left", but got ${side}`
    )
}
