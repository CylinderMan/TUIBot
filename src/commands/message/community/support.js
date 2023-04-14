const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "support",
    aliases: ["support"],
    description: "Take a look at the support",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Support")
       .setColor("#2091eb")
       .setDescription("Do you require assistance? Open a ticket in <#1090341360256688158> or DM <@1063906922945859705>.")

       message.reply({embeds: [embed]});
    }
};