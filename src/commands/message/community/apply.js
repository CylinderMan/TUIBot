const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "apply",
    aliases: ["apply"],
    description: "apply for a job",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Applying For A Job")
       .setColor("#2091eb")
       .setDescription("We carefully choose people who we feel are qualified for the position. Your likelihood of being selected for a job improves if you are helpful, friendly, and active on the server. Be sure to take a look at the <#1094197198373273620> first.")

       message.reply({embeds: [embed]});
    }
};