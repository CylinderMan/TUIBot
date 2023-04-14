const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const {Wordle} = require("discord-gamecord");

module.exports = {
    name: "wordle",
    aliases: ["wordle"],
    description: "Play wordle",
    
    async execute (client, message, args) {
        const Game = new Wordle({
            message: message,
            isSlashGame: false,
            embed: {
                title: "Wordle",
                color: "#2091eb"
            },
            customWord: null,
            timeoutTime: 60000,
            winMessage: "You won! The word was **{word}**!",
            loseMessage: "You lost! The word was **{word}**!",
            playerOnlyMessage: "Only {player} can use these buttons",
        })

        Game.startGame();
        Game.on("gameOver", result => {
            return;
        })
    }
};