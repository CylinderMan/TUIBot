const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "memehelp",
    aliases: ["memehelp"],
    description: "See the meme commands",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Memes")
       .setColor(`#2091eb`)
       .addFields(
        {name: ".airbus", value: "Crash landing `.airbus`"},
        {name: ".butter", value: "smooth batuh `.butter`"},
        {name: ".deadchat", value: "Revive da chat `.deadchat`"},
        {name: ".hadi", value: ":money_mouth: `.hadi`"},
        {name: ".hardlanding", value: "unfunny `.hardlanding`"},
        {name: ".meme", value: "Gives you a random meme `.meme`"},
        {name: ".propaganda", value: "Glory to Ryanair! `.propaganda`"},
        {name: ".william", value: "william chaplain armstrong `.william`"},
        {name: ".yanal", value: "the man himself `.yanal`"},
        {name: ".hi", value: "Hi `.yanal`"},
        {name: ".bubblesay", value: "Send a bubble message! `.bubblesay <message>`"},
       )

        message.channel.send({embeds: [embed]});
    }
};