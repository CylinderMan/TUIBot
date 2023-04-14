const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "deadchat",
    aliases: ["deadchat"],
    description: "Dead : (",
    
    async execute (client, message, args) {
       message.channel.send(`https://tenor.com/view/dead-chat-alive-chat-almost-dead-chat-almost-alive-chat-half-life-gif-21154500`)
    }
};