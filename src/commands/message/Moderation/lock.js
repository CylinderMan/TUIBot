const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "lock",
    aliases: ["lock"],
    description: "Lock a channel",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply(`This command is restricted to staff members. [${message.author}]`);
        const channel = message.mentions.channels.first();
        const reason = args.slice(1).join(" ");
        const logChannel = message.guild.channels.cache.find(c => c.name === "bot-logs");
    
        if (!channel) return message.reply("Please use the following format: `.lock <channel> <reason>`");
        if (!reason) return message.reply("Please use the following format: `.lock <channel> <reason>`");
    
        message.channel.permissionOverwrites.create(message.guild.id, {SendMessages: false})
    
        const successEmbed = new EmbedBuilder()
        .setColor("Red")
        .setDescription(`***Channel has been locked.*** | ${reason}`)
        .setTimestamp()
    
        const logEmbed = new EmbedBuilder()
        .setTitle(`Channel locked | ${channel.name}`)   
        .setColor("Red")
        .addFields(
            {name: "Channel Locked", value: `${channel.name}`},
            {name: "Responsible Moderator", value: `${message.author}`},
            {name: "Reason", value: `${reason}`}
        )
        .setTimestamp()
    
        message.channel.send({embeds: [successEmbed]})
       logChannel.send({embeds: [logEmbed]});
    }
};