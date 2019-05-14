/**
 * Network configuration
 */
export default {
  qtool_api_url: 'localhost',
  qtool_api_port: '5000',
  qtool_api_address() {
    return `http://${this.qtool_api_url}:${this.qtool_api_port}`;
  },
};
