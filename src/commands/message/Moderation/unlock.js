const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "unlock",
    aliases: ["unlock"],
    description: "Unlock a channel",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`);
        const channel = message.mentions.channels.first();
        const reason = args.slice(1).join(" ");
        const logChannel = message.guild.channels.cache.get("1090660013661491300");

        if (!channel) return message.reply("Please use the following format: `?unlock <channel> <reason>`");
        if (!reason) return message.reply("Please use the following format: `?unlock <channel> <reason>`");

        message.channel.permissionOverwrites.create(message.guild.id, {SendMessages: true})

        const successEmbed = new EmbedBuilder()
        .setColor("Green")
        .setDescription(`***Channel has been unlocked.*** | ${reason}`)
        .setTimestamp()

        const logEmbed = new EmbedBuilder()
        .setTitle(`Channel unlocked | ${channel.name}`)   
        .setColor("Green")
        .addFields(
            {name: "Channel unlocked", value: `${channel.name}`},
            {name: "Responsible Moderator", value: `${message.author}`},
            {name: "Reason", value: `${reason}`}
        )
        .setTimestamp()

        message.channel.send({embeds: [successEmbed]})
       logChannel.send({embeds: [logEmbed]});
    }
};