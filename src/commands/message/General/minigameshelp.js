const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "minigameshelp",
    aliases: ["minigameshelp"],
    description: "See the minigames commands",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Minigames")
       .setColor(`#2091eb`)
       .addFields(
        {name: ".connect4", value: "Play connect4 `.connect4 <@opponent>`"},
        {name: ".fastype", value: "Play fastype `.fastype`"},
        {name: ".hangman", value: "Play hangman `.hangman`"},
        {name: ".rockpaperscissors", value: "Play rock paper scissors `.rockpaperscissors <@opponent>`"},
        {name: ".snake", value: "Play snake `.snake`"},
        {name: ".tictactoe", value: "Play tic tac toe `.tictactoe <@opponent>`"},
        {name: ".trivia", value: "Answer random questions `.trivia`"},
        {name: ".wordle", value: "Play wordle `.wordle`"},
       )

        message.channel.send({embeds: [embed]});
    }
};