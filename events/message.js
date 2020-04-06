const kick = require('../commands/kick')

module.exports = (client, message) => {
  if (message.content.startsWith('!kick')) {
    return kick(message)
  }
  if (message.content === 'beep') {
    return message.react('🤖')
    .then(() => {
      return message.reply('Beep bop');
      console.log('OK');
    })
    .catch((error) => {
      console.log(error);
    }
    );
  }
}
