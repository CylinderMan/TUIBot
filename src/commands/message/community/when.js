const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "when",
    aliases: ["when"],
    description: "When is a flight hosted?",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("When is there a flight?")
       .setColor("#2091eb")
       .setDescription("We offer details on forthcoming flights in <#1094196448108752977>. We make every effort to host a flight, usually on weekends.")

       message.reply({embeds: [embed]});
    }
};