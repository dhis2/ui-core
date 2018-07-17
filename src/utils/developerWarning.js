export default function(warning) {
    if (process.env.NODE_ENV !== 'development') {
        console.warn(warning);
    }
}
