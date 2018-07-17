document.addEventListener('DOMContentLoaded', function() {
    var colorSelect = document.getElementById('color-select');
    var dirSelect = document.getElementById('dir-select');

    colorSelect.onchange = function(event) {
        document.body.classList = [event.target.value];
    };

    dirSelect.onchange = function(event) {
        document.documentElement.dir = event.target.value;
    };
});
