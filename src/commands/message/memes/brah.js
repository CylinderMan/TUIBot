const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "brah",
    aliases: ["brah"],
    description: "Just brah",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setColor(`#70CBF4`)
       .setImage(`https://tenor.com/bkULa.gif`)

       message.channel.send({embeds: [embed]})
    }
};