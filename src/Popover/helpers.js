import React from 'react'
import css from 'styled-jsx/css'

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
                    z-index: ${level + 99999999 || 1};
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

export const getPosition = (anchor, popover, hasScreencover) => {
    if (!anchor || !popover) {
        return { left: 0, top: 0 }
    }

    const anchorRect = anchor.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()

    return {
        ...getPositionHorizontal(anchorRect, popoverRect),
        ...getPositionVertical(anchorRect, popoverRect, hasScreencover),
    }

    return styles
}

const getPositionHorizontal = (anchorRect, popoverRect) => {
    const viewportWidth = window.innerWidth
    const leftOffset = anchorRect.x + anchorRect.width
    const rightOffset = anchorRect.x - popoverRect.width
    const fitsToTheLeft = viewportWidth - leftOffset - popoverRect.width > 0
    const left = fitsToTheLeft ? leftOffset : rightOffset

    return { left }
}

const getPositionVertical = (anchorRect, popoverRect, hasScreencover) => {
    const { scrollTop, clientTop } = getScrollAndClientOffset()
    const viewportHeight = window.innerHeight
    const fitsToTheTop = viewportHeight - anchorRect.y > popoverRect.height

    if (!fitsToTheTop) {
        return {
            bottom: 0,
            top: 'auto',
        }
    }

    if (hasScreencover) {
        return {
            top: (scrollTop || clientTop) + anchorRect.y + 'px',
            bottom: 'auto',
        }
    }

    return {
        top: anchorRect.y + 'px',
        bottom: 'auto',
    }
}

export const arePositionsEqual = (left, right) =>
    left.left === right.left &&
    left.top === right.top &&
    left.bottom === right.bottom
