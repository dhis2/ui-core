import css from 'styled-jsx/css'

import {
    doesElementFitInsideContainer,
    getElementInnerDimension,
    getElementOffset,
} from '../helpers/isElementInsideContainer'

export const arePositionsEqual = (left, right) =>
    left.left === right.left && left.top === right.top

const defaultStyles = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}
export const getPosition = ({ pop, anchor, side, spacing }) => {
    if (!anchor || !pop) {
        return { left: 'auto', top: 'auto' }
    }

    const styles = getRelativePosition(anchor, pop, side, spacing)

    if (styles === null) {
        return [
            defaultStyles,
            { adjustmentVertical: 0, adjustmentHorizontal: 0 },
        ]
    }

    return [
        {
            left: styles.left,
            top: styles.top,
        },
        {
            adjustmentVertical: styles.adjustmentVertical,
            adjustmentHorizontal: styles.adjustmentHorizontal,
        },
    ]
}

const getRelativePosition = (anchor, pop, side, spacing) => {
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
        left = anchorOffset.left - popWidth - spacing
        top = anchorOffset.top + anchorHeight / 2 - popHeight / 2
        adjustmentVertical =
            top + popHeight > bodyHeight
                ? // The "+ 1" is due to a chrome calculation error
                  top + popHeight - bodyHeight + 1
                : top < 0
                ? top
                : 0

        return {
            left: left < 0 ? 0 : left,
            top: top - adjustmentVertical,
            adjustmentVertical: adjustmentVertical,
            adjustmentHorizontal: 0,
        }
    }

    if (side === 'right') {
        left = anchorOffset.left + anchorWidth + spacing
        top = anchorOffset.top + anchorHeight / 2 - popHeight / 2
        adjustmentHorizontal = Math.max(
            0,
            // The "+ 1" is due to a chrome calculation error
            left + popWidth - bodyWidth + 1
        )
        adjustmentVertical =
            top + popHeight > bodyHeight
                ? // The "+ 1" is due to a chrome calculation error
                  top + popHeight - bodyHeight + 1
                : top < 0
                ? top
                : 0

        return {
            left: left - adjustmentHorizontal,
            top: top - adjustmentVertical,
            adjustmentVertical,
            adjustmentHorizontal,
        }
    }

    if (side === 'top') {
        left = anchorOffset.left + anchorWidth / 2 - popWidth / 2
        top = anchorOffset.top - popHeight - spacing
        adjustmentHorizontal =
            left + popWidth > bodyWidth
                ? // The "+ 1" is due to a chrome calculation error
                  left + popWidth - bodyWidth + 1
                : left < 0
                ? left
                : 0
        adjustmentVertical = top < 0 ? top : 0

        return {
            left: left - adjustmentHorizontal,
            top: top - adjustmentVertical,
            adjustmentVertical,
            adjustmentHorizontal,
        }
    }

    if (side === 'bottom') {
        left = anchorOffset.left + anchorWidth / 2 - popWidth / 2
        top = anchorOffset.top + anchorHeight + spacing
        adjustmentHorizontal =
            left + popWidth > bodyWidth
                ? // The "+ 1" is due to a chrome calculation error
                  left + popWidth - bodyWidth + 1
                : left < 0
                ? left
                : 0
        adjustmentVertical = Math.max(
            0,
            // The "+ 1" is due to a chrome calculation error
            top + popHeight - bodyHeight + 1
        )

        return {
            left: left - adjustmentHorizontal,
            top: top - adjustmentVertical,
            adjustmentVertical,
            adjustmentHorizontal,
        }
    }

    throw new Error(
        `Position provided to getPosition must be "top", "right", "bottom" or "left", but got ${side}`
    )
}

export const invertSide = side => {
    if (side === 'right') return 'left'
    if (side === 'left') return 'right'
    if (side === 'top') return 'bottom'
    return 'top'
}
