/**
 * This determins the order in which to check whether the pop will fit
 * on the screen or not, if the provided position doesn't fit, this order
 * will be used starting at the next position.
 *
 * Structure of a position is:
 * [
 *   { vertical: string; horizontal: string }, // anchor
 *   { vertical: string; horizontal: string }, // pop
 * ]
 */
export const ROTATION = [
    /**
     * All vertical && horizontal non-centered
     * =========================
     */

    // Top/Top
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'top', horizontal: 'right' },
    ],

    // Top/Bottom
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'right' },
    ],

    // Bottom/Top
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'top', horizontal: 'right' },
    ],

    // Bottom/Bottom
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'right' },
    ],

    /**
     * all horizontal centered
     * =====================
     */
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'top', horizontal: 'left' },
    ],

    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'left' },
    ],

    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'left' },
    ],

    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'top', horizontal: 'left' },
    ],

    /**
     * all vertical centered
     * =====================
     */
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'center', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'center', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'left' },
        { vertical: 'center', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'center', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'center', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'right' },
        { vertical: 'center', horizontal: 'center' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'center', horizontal: 'left' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'center', horizontal: 'right' },
    ],
    [
        { vertical: 'top', horizontal: 'center' },
        { vertical: 'center', horizontal: 'center' },
    ],

    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'center', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'center', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'left' },
        { vertical: 'center', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'center', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'center', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'right' },
        { vertical: 'center', horizontal: 'center' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'center', horizontal: 'left' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'center', horizontal: 'right' },
    ],
    [
        { vertical: 'bottom', horizontal: 'center' },
        { vertical: 'center', horizontal: 'center' },
    ],

    [
        { vertical: 'center', horizontal: 'right' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'center', horizontal: 'right' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'center', horizontal: 'right' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'center', horizontal: 'left' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'center', horizontal: 'left' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'center', horizontal: 'left' },
        { vertical: 'top', horizontal: 'center' },
    ],
    [
        { vertical: 'center', horizontal: 'center' },
        { vertical: 'top', horizontal: 'left' },
    ],
    [
        { vertical: 'center', horizontal: 'center' },
        { vertical: 'top', horizontal: 'right' },
    ],
    [
        { vertical: 'center', horizontal: 'center' },
        { vertical: 'top', horizontal: 'center' },
    ],

    [
        { vertical: 'center', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'center', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'center', horizontal: 'right' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'center', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'center', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'center', horizontal: 'left' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
    [
        { vertical: 'center', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'left' },
    ],
    [
        { vertical: 'center', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'right' },
    ],
    [
        { vertical: 'center', horizontal: 'center' },
        { vertical: 'bottom', horizontal: 'center' },
    ],
]
