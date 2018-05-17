const axios = require('axios')

module.exports = () => {
  return axios.get(URL)
    .then(res => res.data, e => e)
}