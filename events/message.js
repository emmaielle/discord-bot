require("dotenv").config();
const kick = require('../commands/kick')
const help = require('../commands/help')
const randomReact = require('../commands/reactionRandom')

module.exports = (client, message) => {
  randomReact(message);
  const tidyMessage = message.content.toLowerCase();

  if (tidyMessage.startsWith('jarvis')) {
    return setTimeout(() => {
      if (tidyMessage.includes('isolate') || tidyMessage.includes('mute')) {
        try {
          const firstMention = message.mentions.members.first();
          firstMention.voice.setMute(false);
          message.member.voice.setMute(true)
        } catch (error) {
          console.log('user is not connected to voice')
        }
      } else if (tidyMessage.startsWith('jarvis say')) {
        return message.channel.send(`shut up ${message.author.username}`)
      }
    }, 1000);
  } else if (message.author.bot || !message.mentions.has('696492092897230849', {ignoreEveryone: true})) {
    return;
  }

  // 531985892672405515
  if (tidyMessage.startsWith('!kick')) {
    return kick(message);
  }
  else if (tidyMessage.includes('beep')) {
    try {
      message.react('🤖')
      message.channel.send('Beep bop');
      return;
    } catch (error) {
      console.log(error);
    }
  }
  else if (tidyMessage.includes('help')) {
    try {
      return help(message);
    } catch (error) {
      console.log(error);
    }
  }
  else {
    message.reply('Please dont mention me')
  }

}
