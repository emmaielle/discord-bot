require("dotenv").config();
const kick = require('../commands/kick')
const help = require('../commands/help')

module.exports = (client, message) => {
  if (message.author.bot || !message.mentions.has('696492092897230849', {
    ignoreEveryone: true,
  })) {
    return;
  }
  message.reply('Please dont mention me')
  const tidyMessage = message.content.slice(process.env.PREFIX.length).trim().toLowerCase()
  // console.log(tidyMessage)

  if (tidyMessage.startsWith('!kick')) {
    return kick(message);
  }
  if (tidyMessage.includes('beep')) {
    try {
      message.react('🤖')
      message.reply('Beep bop');
      return;
    } catch (error) {
      console.log(error);
    }
  }
  if (tidyMessage.includes('help')) {
    try {
      return help(message);
    } catch (error) {
      console.log(error);
    }
  }

}
