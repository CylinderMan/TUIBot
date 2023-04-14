const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const {Hangman} = require("discord-gamecord");

module.exports = {
    name: "hangman",
    aliases: ["hangman"],
    description: "Play hangman",
    
    async execute (client, message, args) {
        const Game = new Hangman({
            message: message,
            embed: {
                title: "Hangman",
                color: "#2091eb"
            },
            hangman: {hat: "🎩", head: "🤨", shirt: "👕", pants: "👖", boots: "👞👞"},
            timeoutTime: 60000,
            timeWords: "all",
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