const {PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["say"],
    description: "Make the bot say something",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.channel.send(`This command is restricted to staff members. [${message.author}]`)
        const channel = message.mentions.channels.first();
        const m = args.slice(1).join(" ");

        if (!channel) return message.channel.send("Please use the following format: `.say <channel> <message>`");
        if (!m) return message.channel.send("Please use the following format: `.say <channel> <message>`");
            
        message.delete();
        channel.send(m);
    }
};