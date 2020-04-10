module.exports = message => {

  return message.channel.send(
    `No one will help you, ${message.author.username}`,
    { disableMentions: true },
  )

}
