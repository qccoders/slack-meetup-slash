const commands = Object.freeze({
  next: {
    name:'next',
    desc: 'view details of the next meetup'
  },
  help: {
    name:'help',
    desc: 'view possible commands'
  }
})

module.exports.getCommands = () => {
  return Promise.resolve(commands)
}