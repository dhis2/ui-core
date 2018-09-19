export default function(text, required) {
    return required ? `${text} *` : text;
}
