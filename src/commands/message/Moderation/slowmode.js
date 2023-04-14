const {PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "slowmode",
    aliases: ["slowmode"],
    description: "Set the slowmode.",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply(`This command is restricted to staff members. [${message.author}]`);
        if(!args[0]) return message.reply("Please use the following format: `.slowmode <seconds>`");
        if(isNaN(args[0])) return message.reply("Please use the following format: `.slowmode <seconds>`");
        const time = args[0];
        if(args[0] < 0) return message.reply("You need to specify a positive number!");
        if(args[0] > 21600) return message.reply("You need to specify a time that is less than 6 hours!");

        message.channel.setRateLimitPerUser(time);

        message.channel.send(`Successfully set the slowmode on this channel to \`${time}\` seconds.`)
    }
};