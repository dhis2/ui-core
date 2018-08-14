import React from 'react';

// CSS selectors like :first-child, :only-child, :last-child do not take text nodes
// into account, so wrapping text nodes in spans simplifies the CSS file a lot.
export default children =>
    Array.isArray(children)
        ? children.map(wrapTextNodeInSpan)
        : wrapTextNodeInSpan(children);

const wrapTextNodeInSpan = (child, index = 0) => {
    if (['string', 'number'].includes(typeof child)) {
        return <span key={`key-${index}`}>{child}</span>;
    }
    return child;
};
