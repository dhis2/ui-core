/** @format */

/**
 * when required is True, Modifies text to include a required marker e.g. *
 *
 * @param text
 * @param required
 * @returns {string}
 */
export function getRequiredText(text, required) {
    return required ? `${text} *` : text
}
