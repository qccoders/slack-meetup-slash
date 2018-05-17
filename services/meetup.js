const format = require('date-fns').format
const fetch = require('./qccoders-fetch')
const URL = process.env.MEETUP_ENDPOINT

const NEXT_EVENT_DEFAULTS = {
  name: 'Not yet assigned',
  yes_rsvp_count:0,
  time: undefined
}

const formatMeetupMessage = (meetupInfo) => {
  return `Next meetup: ${meetupInfo.next_event.name},
  is going to be on ${format(meetupInfo.next_event.time, 'MM dddd')} ${meetupInfo.timezone}.
  Currently, there are ${meetupInfo.next_event.yes_rsvp_count} people going.
  `
}

const parseInfo = (meetupJSON = {}) => {
  const {
    timezone = 'US/Central', 
    next_event = NEXT_EVENT_DEFAULTS
  } = meetupJSON
  
  const message = formatMeetupMessage({timezone, next_event})
  const nextMeetupLink = `${meetupJSON.link}events/${meetupJSON.next_event.id}`

  return {message, nextMeetupLink}
}

const getNextMeetup = () => {
    return fetchData(URL)
    .then(parseInfo)
    .catch(err => reject(err))
}

module.exports.getNextMeetup = getNextMeetup