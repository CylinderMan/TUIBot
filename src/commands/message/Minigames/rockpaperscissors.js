const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const {RockPaperScissors } = require("discord-gamecord");

module.exports = {
    name: "rockpaperscissors",
    aliases: ["rockpaperscissors"],
    description: "Play rockpaperscissors",
    
    async execute (client, message, args) {
        const Game = new RockPaperScissors({
            message: message,
            isSlashGame: false,
            opponent: message.mentions.users.first(),
            embed: {
              title: 'Rock Paper Scissors',
              color: '#5865F2',
              description: 'Press a button below to make a choice.'
            },
            buttons: {
              rock: 'Rock',
              paper: 'Paper',
              scissors: 'Scissors'
            },
            emojis: {
              rock: '🌑',
              paper: '📰',
              scissors: '✂️'
            },
            mentionUser: true,
            timeoutTime: 60000,
            buttonStyle: 'PRIMARY',
            pickMessage: 'You choose {emoji}.',
            winMessage: '**{player}** won the Game! Congratulations!',
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