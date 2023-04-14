const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "hi",
    aliases: ["hi"],
    description: "Hi",
    
    async execute (client, message, args) {
        message.channel.send(`https://tenor.com/en-GB/view/hello-chat-orbn-viktor-orbán-gif-25485671`)
    }
};