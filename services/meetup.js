const fetch = require('./qccoders-fetch')
const URL = process.env.MEETUP_ENDPOINT

const formatCommands = (commands) => {
  let stringList = ''

  Object.values(commands).forEach(val => {
    return stringList += `\`${val.name}: ${val.desc}\` \n`
  })
  console.log(stringList)
  return stringList
}

const formatRSVPMessage = (meetupInfo) => {
  return `Currently, there are ${meetupInfo.next_event.yes_rsvp_count} people going.`
}

const parseInfo = (meetupJSON) => {
  const message = formatRSVPMessage(meetupJSON)
  const nextMeetupLink = `${meetupJSON.link}events/${meetupJSON.next_event.id}`

  return {message, nextMeetupLink}
}

const getNextMeetup = (groupname='qccoders') => {
    return fetch(`${URL}${groupname}`)
    .then(parseInfo)
    .catch(err => err)
}

module.exports.getNextMeetup = getNextMeetup
module.exports.formatCommands = formatCommands