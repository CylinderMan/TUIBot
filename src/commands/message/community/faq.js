const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "faq",
    aliases: ["faq"],
    description: "Take a look at the faq",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Frequently Asked Questions")
       .setColor("#2091eb")
       .setDescription("Our FAQ is mentioned in <#1090334477298970674>.")

       message.reply({embeds: [embed]});
    }
};