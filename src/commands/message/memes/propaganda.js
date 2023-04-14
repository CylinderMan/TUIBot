const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "propaganda",
    aliases: ["propaganda"],
    description: "Dead : (",
    
    async execute (client, message, args) {
       message.channel.send(`https://images-ext-2.discordapp.net/external/I2UXa7VdjjrZ1KjfYcDjjHRAgAEoctekJlOzySMEYow/https/i.imgur.com/o76pvSR.mp4`)
    }
};