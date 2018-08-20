export default function(blockName) {
    return function() {
        let blockElementPrefix = blockName;
        const elementName = arguments[0];
        const modifierArgs = Array.prototype.slice.call(arguments, 1);

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

    modifierArgs.forEach(arg => {
        const argType = typeof arg;

        if (argType === 'number' || argType === 'string') {
            classes.push(`${prefix}--${arg}`);
        } else if (argType === 'object' && !Array.isArray(arg)) {
            Object.keys(arg).forEach(argKey => {
                if (arg[argKey]) {
                    classes.push(`${prefix}--${argKey}`);
                }
            });
        }
    });

    return classes.join(' ');
}
