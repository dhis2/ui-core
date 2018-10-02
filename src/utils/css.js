/** @format */

import classes from 'classnames/bind'

const DEFAULT_PREFIX = 'd2ui-'
export function bemClassNames(blockName) {
    if (!blockName.startsWith(DEFAULT_PREFIX)) {
        blockName = `${DEFAULT_PREFIX}${blockName}`
    }

    let elementLookup = {}

    return {
        b: (...modifierArgs) =>
            modifierArgs.length === 0
                ? blockName
                : bemClass(blockName, modifierArgs),
        e: (elementName, ...modifierArgs) => {
            if (!elementLookup[elementName]) {
                elementLookup[elementName] = `${blockName}__${elementName}`
            }
            return modifierArgs.length === 0
                ? elementLookup[elementName]
                : bemClass(elementLookup[elementName], modifierArgs)
        },
    }
}

function bemClass(prefix, modifierArgs) {
    const classes = [prefix]

    for (let arg of modifierArgs) {
        const argType = typeof arg

        if ((arg && argType === 'number') || argType === 'string') {
            classes.push(`${prefix}--${arg}`)
        } else if (arg && argType === 'object' && !Array.isArray(arg)) {
            for (let argKey of Object.keys(arg)) {
                if (arg[argKey]) {
                    classes.push(`${prefix}--${argKey}`)
                }
            }
        } else {
            console.info(
                `bemClassNames::Unknown argument: '${arg}', skipping...`
            )
        }
    }

    return classes.join(' ')
}

export default function classNames(styles) {
    return classes.bind(styles)
}
