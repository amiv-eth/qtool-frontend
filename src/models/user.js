var m = require('mithril');

var user = {
    list: [],
    loadList: function() {
        return m.request({
            method: 'GET',
            url: 'https://rem-rest-api.herokuapp.com/api/users',
            withCredentials: true
        })
        .then(function (result) {
            user.list = result.data;
        })
    },

    current: {},
    load: function(id) {
        return m.request({
            method: 'GET',
            url: 'https://rem-rest-api.herokuapp.com/api/users/' + id,
            withCredentials: true
        })
        .then(function(result) {
            user.current = result;
        })
    },

    save: function() {
        return m.request({
            method: 'PUT',
            url: 'https://rem-rest-api.herokuapp.com/api/users/' + user.current.id,
            data: user.current,
            withCredentials: true
        })
    }
}

module.exports = user;

