/**
 * Check if object { x, y } passed in first param exists within
 * second param { left, right, top, bottom }
 *
 * @returns {boolean}
 */
export function isPointInRect({ x, y }, { left, right, top, bottom }) {
    return x >= left && x <= right && y >= top && y <= bottom
}
