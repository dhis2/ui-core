/** @format */

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
                : classNames(blockName, modifierArgs),
        e: (elementName, ...modifierArgs) => {
            if (!elementLookup[elementName]) {
                elementLookup[elementName] = `${blockName}__${elementName}`
            }
            return modifierArgs.length === 0
                ? elementLookup[elementName]
                : classNames(elementLookup[elementName], modifierArgs)
        },
    }
}

function classNames(prefix, modifierArgs) {
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
