var m = require('mithril');

var user = require('../models/user')

module.exports = {
    oninit: function(vnode) {user.load(vnode.attrs.id)},
    view: function() {
        return m('form', {
            onsubmit: function(e) {
                e.preventDefault()
                user.save()
            }
        }, [
            m('label.label', 'First Name'),
            m('input.input[type=text][placeholder=First Name]', {
                oninput: m.withAttr('value', function(value) {
                    user.current.firstName = value
                }),
                value: user.current.firstName
            }),
            m('label.label', 'Last Name'),
            m('input.input[type=text][placeholder=Last Name]', {
                oninput: m.withAttr('value', function(value) {
                    user.current.lastName = value
                }),
                value: user.current.lastName
            }),
            m('button.button[type=submit]', 'Save')
        ])
    }
}