import { combinations, positions } from './positions'

const invertPointHorizontal = point => ({
    ...point,
    horizontal:
        point.horizontal === 'right'
            ? 'left'
            : point.horizontal === 'left'
            ? 'right'
            : point.horizontal,
})

const invertPointVertical = point => ({
    ...point,
    vertical:
        point.vertical === 'top'
            ? 'bottom'
            : point.vertical === 'bottom'
            ? 'top'
            : point.vertical,
})

const invertHorizontal = position => position.map(invertPointHorizontal)

const invertVertical = position => position.map(invertPointVertical)

const invertBoth = position =>
    position.map(invertPointVertical).map(invertPointHorizontal)

const isSpecialCase = ([anchor, pop]) => {
    const { vertical: aVertical, horizontal: aHorizontal } = anchor
    const { vertical: pVertical, horizontal: pHorizontal } = pop
    const all = [aVertical, aHorizontal, pVertical, pHorizontal]

    return (
        2 <
        all.reduce(
            (centeredEdgeAmount, edge) =>
                edge === 'center' ? centeredEdgeAmount + 1 : centeredEdgeAmount,
            0
        )
    )
}

const generateFallbacksForSpecialCase = (position, invertAnchor) => {
    const [anchor, pop] = position
    const { vertical } = invertAnchor ? anchor : pop
    const isVerticalCentered = vertical === 'center'

    return [
        invertBoth(position),
        ...(invertAnchor
            ? isVerticalCentered
                ? [
                      positions.TOP_CENTER_CENTER_CENTER,
                      positions.BOTTOM_CENTER_CENTER_CENTER,
                  ]
                : [
                      positions.CENTER_RIGHT_CENTER_CENTER,
                      positions.CENTER_LEFT_CENTER_CENTER,
                  ]
            : isVerticalCentered
            ? [
                  positions.CENTER_CENTER_TOP_CENTER,
                  positions.CENTER_CENTER_BOTTOM_CENTER,
              ]
            : [
                  positions.CENTER_CENTER_CENTER_RIGHT,
                  positions.CENTER_CENTER_CENTER_LEFT,
              ]),
    ]
}

const generateFallbacksForAllSpecialCases = position => {
    const [anchor, pop] = position
    const { vertical: aVertical, horizontal: aHorizontal } = anchor
    const { vertical: pVertical, horizontal: pHorizontal } = pop

    if (aVertical === 'center' && aHorizontal === 'center') {
        if (pVertical === 'center' && pHorizontal === 'center') {
            return [
                positions.TOP_CENTER_BOTTOM_CENTER,
                positions.BOTTOM_CENTER_TOP_CENTER,
                positions.RIGHT_CENTER_LEFT_CENTER,
                positions.LEFT_CENTER_RIGHT_CENTER,
            ]
        }

        return generateFallbacksForSpecialCase(position, false)
    }

    return generateFallbacksForSpecialCase(position, true)
}

const generateFallbacks = position =>
    isSpecialCase(position)
        ? generateFallbacksForAllSpecialCases(position)
        : [
              invertHorizontal(position),
              invertVertical(position),
              invertBoth(position),
          ]

/**
 * This determins the order in which to check whether the pop will fit
 * on the screen or not, if the provided position doesn't fit, this order
 * will be used starting at the next position.
 *
 * Structure of a position is:
 * [
 *   { vertical: string; horizontal: string }, // anchor
 *   { vertical: string; horizontal: string }, // pop
 *   [ ...Fallback positions ]
 * ]
 */
export const FALLBACKS = combinations.map(position => [
    ...position,
    generateFallbacks(position),
])
