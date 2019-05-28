const points = (() => {
    const verticalPositions = ['top', 'center', 'bottom']
    const horizontalPositions = ['left', 'center', 'right']

    return verticalPositions.reduce(
        (all, vertical) =>
            horizontalPositions.reduce((all, horizontal) => {
                all.push({ vertical, horizontal })
                return all
            }, all),
        []
    )
})()

const combinations = (() =>
    points.reduce(
        (all, anchorPoint) =>
            points.reduce((all, popPoint) => {
                all.push([anchorPoint, popPoint])
                return all
            }, all),
        []
    ))()

const positions = (() =>
    combinations.reduce((all, position) => {
        const [anchor, pop] = position
        const { vertical: aVertical, horizontal: aHorizontal } = anchor
        const { vertical: pVertical, horizontal: pHorizontal } = pop
        const name = `${aVertical}_${aHorizontal}_${pVertical}_${pHorizontal}`.toUpperCase()

        all[name] = position
        return all
    }, {}))()

export { combinations, positions }
