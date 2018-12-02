var m = require('mithril');

var belegformular = require('./views/belegformular');
var layout = require('./views/layout');

m.route(document.body, '/belegformular', {
    '/belegformular': {
        render: function() {
            return m(layout, m(belegformular))
        }
    }
});

