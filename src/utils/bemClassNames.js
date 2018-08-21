export default function(blockName) {
    return function(elementName, ...modifierArgs) {
        let blockElementPrefix = blockName;

        if (elementName) {
            blockElementPrefix += `__${elementName}`;
        }

        if (modifierArgs.length === 0) {
            return blockElementPrefix;
        }

        return classNames(blockElementPrefix, modifierArgs);
    };
}

function classNames(prefix, modifierArgs) {
    const classes = [prefix];

    for (let arg of modifierArgs) {
        const argType = typeof arg;

        if (argType === 'number' || argType === 'string') {
            classes.push(`${prefix}--${arg}`);
        } else if (argType === 'object' && !Array.isArray(arg)) {
            for (let argKey of Object.keys(arg)) {
                if (arg[argKey]) {
                    classes.push(`${prefix}--${argKey}`);
                }
            }
        } else {
            console.info(`Unknown argument: '${arg}', skipping...`)
        }
    }

    return classes.join(' ');
}
