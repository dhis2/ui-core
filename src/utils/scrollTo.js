import easings from './easings';
import debounce from './debounce';

function scrollTo(to, duration, callback) {
    var doc, start, change, currTime, freq, scrollInterval, scrollVal;

    const doc = document.documentElement;
    const start = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const change = to - start;
    const currTime = 0;
    const freq = 20;

    scrollInterval = setInterval(function() {
        currTime += freq;
        scrollVal = easings.easeInOutQuad(currTime, start, change, duration);
        window.scrollTo(0, scrollVal);
        if (currTime >= duration) {
            clearInterval(scrollInterval);
            if (callback) {
                callback();
            }
        }
    }, freq);
}
