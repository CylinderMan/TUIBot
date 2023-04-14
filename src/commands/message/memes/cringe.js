const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "cringe",
    aliases: ["die"],
    description: "Just die",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setColor(`#70CBF4`)
       .setImage(`https://tenor.com/bNjvT.gif`)

       message.channel.send({embeds: [embed]})
    }
};