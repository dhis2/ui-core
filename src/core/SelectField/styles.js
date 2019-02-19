import css from 'styled-jsx/css'

export default css`
    .base {
        display: inline-block;
        position: relative;
        width: 100%;
        background-color: inherit;
        color: var(--grey700);
        pointer-events: all;
        user-select: none;
    }

    .select {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding-left: 8px;
        border-radius: 5px;
    }

    /* we have disabled the pointer-events for the fieldset so we can click
   through it, that's why we target it through the parent's hover */
    .select:hover .flatline,
    .select:hover .flatline.idle.filled,
    .select:hover .flatline.focused {
        border: 1px solid var(--grey700);
    }

    .select.kind-filled {
        border-bottom: 2px solid transparent;
        border-radius: 5px;
        background-color: rgba(0, 0, 10, 0.05);
    }

    .select.kind-filled:hover,
    .select.kind-filled.focused {
        border-bottom: 2px solid var(--secondary600);
        background-color: rgba(0, 0, 10, 0.08);
    }

    .value {
    }

    .size-default {
        height: 56px;
    }

    .size-dense {
        height: 44px;
    }

    .menu {
        z-index: 1000;
        position: absolute;
        left: 0;
    }

    .size-default .menu {
        top: 56px;
    }

    .size-dense .menu {
        top: 44px;
    }

    .icon {
        color: var(--grey700);
    }

    .arrow-icon {
        color: var(--grey900);
    }

    .lead-icon-field {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 4px;
        padding: 0;
    }

    .trail-icon-field {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 4px;
        padding: 0;
    }

    .input-field {
        display: flex;
        position: relative;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 12px 0 0 0;
        color: inherit;
    }

    .kind-outlined .input-field {
        margin: 0;
        border-radius: inherit;
        background-color: inherit;
    }

    /* status */

    .disabled,
    .disabled .select,
    .disabled .select .value,
    .disabled::placeholder {
        color: var(--grey500);
        cursor: not-allowed;
        opacity: 1;
    }

    /*
 * OUTLINE
 *
 */
    .flatline {
        position: absolute;

        top: -8px;
        right: 0;
        bottom: 0;
        left: 0;
        padding-left: 8px;

        border: 1px solid var(--grey500);
        border-radius: 5px;

        pointer-events: none;
    }

    .flatline.idle.filled {
        border: 1.5px solid var(--grey500);
    }

    .flatline.focused {
        border: 1.5px solid var(--secondary600);
    }

    /*
 * outlined fieldset status states
 */
    .flatline.valid,
    .flatline.valid.idle.filled,
    .flatline.valid.focused {
        border: 1.5px solid var(--blue600);
    }
    .flatline.warning,
    .flatline.warning.idle.filled,
    .flatline.warning.focused {
        border: 1.5px solid var(--yellow500);
    }
    .flatline.error,
    .flatline.error.idle.filled,
    .flatline.error.focused {
        border: 1.5px solid var(--red500);
    }

    /*
 *
 * LABEL
 *
 */

    .label {
        display: block;
        position: absolute;

        left: 8px;
        transform: translate(8px, 0px) scale(1);
        transform-origin: top left;
        color: var(--grey700);
        white-space: nowrap;
        pointer-events: none;

        transition: all 0.1s;
    }

    .label.required::after {
        content: '*';
    }

    .label.filled.focused {
        color: var(--secondary600);
    }

    .label.filled.shrink {
        transform: translate(8px, -12px) scale(0.75);
    }

    .label.filled.dense.shrink {
        transform: translate(8px, -8px) scale(0.75);
    }

    .label.filled.has-icon {
        left: 28px;
    }

    .label.filled.shrink.has-icon {
        left: 28px;
    }

    .label.outlined.focused {
        color: var(--secondary600);
    }

    .label.outlined.shrink {
        transform: translate(8px, -24px) scale(0.75);
    }

    .label.outlined.shrink.dense {
        transform: translate(8px, -18px) scale(0.75);
    }

    .label.outlined.has-icon {
        left: 28px;
    }

    .label.outlined.shrink.has-icon {
        left: 8px;
    }

    /*
 * label status states
 */
    .icon-valid,
    .label.filled.valid,
    .label.outlined.valid {
        color: var(--blue600);
    }

    .icon-warning,
    .label.filled.warning,
    .label.outlined.warning {
        color: var(--yellow500);
    }
    .icon-error,
    .label.filled.error,
    .label.outlined.error {
        color: var(--red500);
    }

    /*
 * filled field states
 */
    .select.kind-filled.status-valid:hover,
    .select.kind-filled.focused.status-valid {
        border-bottom: 2px solid var(--blue600);
    }
    .select.kind-filled.status-warning:hover,
    .select.kind-filled.focused.status-warning {
        border-bottom: 2px solid var(--yellow500);
    }
    .select.kind-filled.status-error:hover,
    .select.kind-filled.focused.status-error {
        border-bottom: 2px solid var(--red500);
    }

    /*
 * disabled
 */
    .label.filled.disabled,
    .select.kind-filled.disabled:hover,
    .select.kind-filled.disabled {
        border: 2px solid transparent;
        background-color: rgba(0, 0, 10, 0.02);
        color: var(--grey500);
    }

    .label.filled.disabled {
        background-color: transparent;
    }

    .select.disabled .flatline,
    .select.disabled:hover .flatline {
        border: 1px solid rgba(196, 196, 196, 0.2);
    }

    .label.kind-outlined.disabled {
        color: var(--grey500);
    }

    .disabled,
    .disabled::placeholder {
        color: var(--grey500);
        cursor: not-allowed;
    }

    /* IE */
    _:-ms-input-placeholder,
    :root .flatline,
    _:-ms-input-placeholder,
    :root .field.kind-filled {
        border-radius: 0px;
    }

    _:-ms-input-placeholder,
    :root .label {
        transform: translate(14px, -8px) scale(1);
    }

    _:-ms-input-placeholder,
    :root .label.filled.shrink {
        transform: translate(8px, -20px) scale(0.75);
    }
    _:-ms-input-placeholder,
    :root .label.filled.dense.shrink {
        transform: translate(8px, -18px) scale(0.75);
    }
    _:-ms-input-placeholder,
    :root .label.outlined.shrink {
        transform: translate(8px, -32px) scale(0.75);
    }

    _:-ms-input-placeholder,
    :root .label.outlined.shrink.dense {
        transform: translate(8px, -26px) scale(0.75);
    }
`
