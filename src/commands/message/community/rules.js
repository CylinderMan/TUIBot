const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "rules",
    aliases: ["rules"],
    description: "Take a look at the rules",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Rules")
       .setColor("#2091eb")
       .setDescription("Do you ever need reminding? In <#1090334111677284383>, our regulations are mentioned.")

       message.reply({embeds: [embed]});
    }
};