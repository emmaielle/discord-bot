require("dotenv").config();
const kick = require('../commands/kick')
const help = require('../commands/help')

module.exports = (client, message) => {
  if (message.author.bot || message.content.indexOf(process.env.PREFIX) != 0) {
    return;
  }

  const tidyMessage = message.content.slice(process.env.PREFIX.length).trim().toLowerCase()

  switch (tidyMessage) {
    case 'help me':
      return help(message);
  }

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

}
