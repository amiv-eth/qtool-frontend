const API = {
  server: 'localhost',
  port: '5000',
  address() {
    return `http://${API.server}:${API.port}`;
  },
};

module.exports = API;
