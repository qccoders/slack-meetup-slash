const commands = Object.freeze({
  next: {
    name:'next',
    desc: 'view details of the next meetup. Optional: append a meetup group\'s name (spaces separated by hyphens).'
  },
  help: {
    name:'help',
    desc: 'view possible commands'
  }
})

module.exports.getCommands = () => {
  return Promise.resolve(commands)
}