/** @format */

// Adapted from https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
export function easeInOutQuad(currentTime, initialValue, change, duration) {
    return (currentTime /= duration / 2) < 1
        ? (change / 2) * currentTime * currentTime + initialValue
        : (-change / 2) * (--currentTime * (currentTime - 2) - 1) + initialValue
}
