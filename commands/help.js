module.exports = message => {

  return message.reply(
    `No one will help you, ${message.author.username}`,
    { disableMentions: true },
  )

}
