const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const {Connect4  } = require("discord-gamecord");

module.exports = {
    name: "connect4",
    aliases: ["connect4"],
    description: "Play connect4",
    
    async execute (client, message, args) {
        const Game = new Connect4({
            message: message,
            isSlashGame: false,
            opponent: message.mentions.users.first(),
            embed: {
              title: 'Connect4 Game',
              statusTitle: 'Status',
              color: '#5865F2'
            },
            emojis: {
              board: '⚪',
              player1: '🔴',
              player2: '🟡'
            },
            mentionUser: true,
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Its turn of player **{player}**.',
            winMessage: '{emoji} | **{player}** won the Connect4 Game.',
            tieMessage: 'The Game tied! No one won the Game!',
            timeoutMessage: 'The Game went unfinished! No one won the Game!',
            playerOnlyMessage: 'Only {player} and {opponent} can use these buttons.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            return;
          });
    }
};