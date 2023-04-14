const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "advertisements",
    aliases: ["advertisements"],
    description: "Take a look at the advertisements",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Advertisements")
       .setColor("#2091eb")
       .setDescription("You may advertise in <#1090340740774764564>. Be sure to read the pins first.")

       message.reply({embeds: [embed]});
    }
};