const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "simbrief",
    aliases: ["simbrief"],
    description: "Take a look at simbrief",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Simbrief")
       .setColor("#2091eb")
       .setDescription(`The Simbrief website is [here](https://dispatch.simbrief.com/home).`)

       message.reply({embeds: [embed]});
    }
};