const axios = require('axios')

const URL = process.env.MEETUP_ENDPOINT

const NEXT_EVENT_DEFAULTS = {
  name: 'Not yet assigned',
  yes_rsvp_count:0,
  time: new Date.now()
}
const parseInfo = (meetupJSON = {}) => {
  const {
    timezone = 'US/Central', 
    next_event = NEXT_EVENT_DEFAULTS
  } = meetupJSON

  return {
    timezone,
    next_event
  }
}

const getNextMeetup = () => {
  return new Promise((resolve, reject) => {
    return axios.get(url)
    .then(res => res.data)
    .then(parseInfo)
    .then(nextMeetupInfo => resolve(nextMeetupInfo))
    .catch(e => reject('error: ', e.message))
  })
}

module.exports.getNextMeetup = getNextMeetup