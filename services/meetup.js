const format = require('date-fns').format
const fetch = require('./qccoders-fetch')
const URL = process.env.MEETUP_ENDPOINT

const formatRSVPMessage = (meetupInfo) => {
  return `Currently, there are ${meetupInfo.next_event.yes_rsvp_count} people going.`
}

const parseInfo = (meetupJSON) => {
  
  const message = formatRSVPMessage({timezone, next_event})
  const nextMeetupLink = `${meetupJSON.link}events/${meetupJSON.next_event.id}`

  return {message, nextMeetupLink}
}

const getNextMeetup = () => {
    return fetch(URL)
    .then(parseInfo)
    .catch(err => reject(err))
}

module.exports.getNextMeetup = getNextMeetup