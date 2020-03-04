import React from 'react'
import propTypes from '@dhis2/prop-types'

import { IconMoveDown, IconMoveUp } from './icons'
import { spacers } from '../theme.js'
import { borderColor, borderRadius } from './common.js'

export const ReorderingActions = ({
    dataTest,
    disabled,
    onChangeUp,
    onChangeDown,
}) => (
    <div data-test={`${dataTest}-reorderingactions`}>
        <a
            disabled={disabled}
            onClick={event => {
                event.preventDefault()
                onChangeUp(event)
            }}
            data-test={`${dataTest}-buttonmoveup`}
        >
            <IconMoveUp dataTest={dataTest} />
        </a>

        <a
            disabled={disabled}
            onClick={event => {
                event.preventDefault()
                onChangeDown(event)
            }}
            data-test={`${dataTest}-buttonmovedown`}
        >
            <IconMoveDown dataTest={dataTest} />
        </a>

        <style jsx>{`
            div {
                display: flex;
                flex-direction: row-reverse;
                padding-top: ${spacers.dp8};
            }

            div:last-child {
                padding-bottom: ${spacers.dp8};
            }

            a {
                height: ${spacers.dp24};
                width: ${spacers.dp24};
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                padding: 0;
                border: 1px solid ${borderColor};
                border-radius: ${borderRadius};
                background: none;
                margin-left: ${spacers.dp8};
            }

            [disabled] {
                cursor: normal;
            }

            a:last-child {
                margin-left: 0;
            }
        `}</style>
    </div>
)

ReorderingActions.propTypes = {
    dataTest: propTypes.string.isRequired,
    onChangeDown: propTypes.func.isRequired,
    onChangeUp: propTypes.func.isRequired,
    disabled: propTypes.bool,
}
