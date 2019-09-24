let scrollbarSize
const className = '__vertical-scrollbar-height-test__'
const styles = `
    .${className} {
        position: absolute;
        top: -9999px;
        width: 100px;
        height: 100px;
        overflow-x: scroll;
    }
    .${className}::-webkit-scrollbar {
        display: none;
    }
`

// This function assumes horizontal and vertical scrollbars
// are always the same for a given browser/OS combo
export function detectScrollbarSize() {
    if (scrollbarSize) {
        return scrollbarSize
    }

    const style = document.createElement('style')
    style.innerHTML = styles

    const el = document.createElement('div')
    el.classList.add(className)

    document.body.appendChild(style)
    document.body.appendChild(el)

    scrollbarSize = el.offsetHeight - el.clientHeight

    document.body.removeChild(style)
    document.body.removeChild(el)

    return scrollbarSize
}
