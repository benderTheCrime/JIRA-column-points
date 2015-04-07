(function(w, d) {
    'use strict';

    var	a = Array.prototype.slice,
        s = w.setInterval,
        c = chrome,
        e = c.extension;

    var readyInterval;

    function setPoints() {
        var columns = a.call(d.querySelectorAll('.ghx-columns .ghx-column')),
            columnHeaders = a.call(d.querySelectorAll('.ghx-column')),
            span = d.createElement('span');
        span.className = 'badge aui-badge sc-badge';
        span.style['margin-left'] = '6px';
        columns.forEach(function(v, i) {
            var column = v,
                stories = a.call(v.querySelectorAll('.aui-badge')),
                columnId = v.getAttribute('data-column-id'),
                points = 0;
            stories.forEach(function(v, i) {
                points += +v.innerText;
            });
            columnHeaders.forEach(function(v, i) {
                if (v.getAttribute('data-id') === columnId) {
                    var badge = v.querySelector('.sc-badge'),
                        headerBadge = badge ? badge : span;
                    headerBadge.innerHTML = points;
                    v.appendChild(headerBadge);
                }
            });
        });
    }

    function ready() {
        if (d.readyState === 'complete') {
            clearInterval(readyInterval);
            s(setPoints, 100);
        }
    }

    e.sendMessage({}, function() {
        readyInterval = s(ready, 10);
    });
})(window, document);
