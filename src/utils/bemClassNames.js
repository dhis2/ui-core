export default function(blockName) {
    return {
        b: (...modifierArgs) =>
            modifierArgs.length === 0 ? blockName : classNames(blockName, modifierArgs),
        e: (elementName, ...modifierArgs) =>
            modifierArgs.length === 0
                ? `${blockName}__${elementName}`
                : classNames(`${blockName}__${elementName}`, modifierArgs),
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
            console.info(`bemClassNames::Unknown argument: '${arg}', skipping...`);
        }
    }

    return classes.join(' ');
}
