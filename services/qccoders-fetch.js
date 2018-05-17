const axios = require('axios')

module.exports = (endpoint) => {
  return axios.get(endpoint)
    .then(res => res.data, e => e)
}