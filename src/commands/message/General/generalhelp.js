const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "generalhelp",
    aliases: ["generalhelp"],
    description: "See the general commands",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("General")
       .setColor(`#2091eb`)
       .addFields(
        {name: ".dictionary", value: "Look up a word `.dictionary <word>`"},
        {name: ".nameme", value: "RyanBot gives you a random name! `.nameme`"},
        {name: ".ping", value: "Returns the bot ping `.ping`"},
        {name: ".rate", value: "Rate something `.rate <thing>`"},
        {name: ".remind", value: "Remind yourself! `.remind <time(10s 1h 2d)> <reminder>`"},
        {name: ".serverinfo", value: "Server stats `.serverinfo`"},
        {name: ".translate", value: "Translate a word `.translate <language> <language>`"},
        {name: ".userinfo", value: "Information about a user `.userinfo <@user>`"},
        {name: ".imagine", value: "Generate an image! `.imagine <thing>`"},
        {name: ".cat", value: "Generate a cute cat! `.cat`"},
        {name: ".shortenlinks", value: "Short links! `.shortenlink <link>`"},
        {name: ".weather", value: "Check the weather of a location `.weather <location>`"},
        {name: ".tweet", value: "Send a fake tweet! `.tweet <thing>`"},
        {name: ".randomaircraft", value: "A random aircraft! `.randomaircraft`"},
        {name: ".tts", value: "Send a text to speech message `.tts <message>`"},
        {name: ".docs", value: "Search Discord docs `.docs <query>`"},
        {name: ".calculator", value: "Use a calculator `.calculator`"},
        {name: ".wiki", value: "Search wikipedia! `.wiki <query>`"},
        {name: ".emojis", value: "View all the emojis of the server `.emojis`"},
       )

        message.channel.send({embeds: [embed]});
    }
};