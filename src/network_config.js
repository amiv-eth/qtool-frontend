/**
 * Network configuration
 */
export default {
  qtool_api_url: 'localhost',
  qtool_api_port: '5000',
  qtool_api_address() {
    return `http://${this.qtool_api_url}:${this.qtool_api_port}`;
  },
  amiv_api_address: 'https://api-dev.amiv.ethz.ch',
  own_url: 'http://localhost:9000',
  oAuthID: 'Local Tool',
};
