/**
 * Network configuration
 */
export default {
  server: 'localhost',
  port: '5000',
  address() {
    return `http://${this.server}:${this.port}`;
  },
};
