import React from 'react' // eslint-disable-line no-unused-vars
import css, { resolve } from 'styled-jsx/css'
import { colors, spacers, elevations } from '../theme.js'

export const ANIMATION_TIME = 350

export const iconStyles = resolve`
    svg.dismiss,
    svg.white, {
        fill: ${colors.white};
    }
    svg.yellow {
        fill: ${colors.yellow900};
    }
    svg.dismiss {
        width: 18px;
        height: 18px;
    }
`

export default css`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        border-radius: 4px;
        box-shadow: ${elevations.e300};

        padding-top: ${spacers.dp12};
        padding-right: ${spacers.dp16};
        padding-bottom: ${spacers.dp12};
        padding-left: ${spacers.dp24};

        margin-bottom: ${spacers.dp16};

        max-width: 600px;

        font-size: 14px;

        transform: translateY(1000px);
        transition: transform ${ANIMATION_TIME}ms cubic-bezier(0.4, 0, 0.6, 1);

        pointer-events: all;
    }

    /* States */
    div.info {
        background-color: ${colors.grey900};
        color: ${colors.white};
    }
    div.success {
        background-color: ${colors.green800};
        color: ${colors.white};
    }
    div.warning {
        background-color: ${colors.yellow300};
        color: ${colors.yellow900};
    }
    div.critical {
        background-color: ${colors.red800};
        color: ${colors.white};
    }

    /* Animation */
    div.visible {
        transform: translateY(0px);
    }
`
