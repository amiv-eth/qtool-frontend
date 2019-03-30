var API = {
  server: 'localhost',
  port: '5000',
  address: function() {
    return 'http://' + API.server + ':' + API.port;
  },
};

module.exports = API;
