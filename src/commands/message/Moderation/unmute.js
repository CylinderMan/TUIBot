const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "unmute",
    aliases: ["unmute"],
    description: "Unmute someone from the server",
    
    async execute (client, message, args) {
        const logChannel = message.guild.channels.cache.get("1090660013661491300")
        if(!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`);

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `.unmute <user>`")
        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch (err) {
            member = null;
        }
        if (member) {
            if(member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply("You cannot unmute a fellow staff member!");
        }

        const log = new EmbedBuilder()
        .setTitle(`Member unmuted | ${user.tag}`)   
        .setColor("Green")
        .addFields(
            {name: "User", value: `${user.tag}`},
            {name: "Responsible Moderator", value: `${message.author}`},
            )
        .setThumbnail(member.user.displayAvatarURL({dymaic: true}))
        .setFooter({text: `User ID: ${user.id}`})
        .setTimestamp()
        logChannel.send({embeds: [log]});

        const dmEmbed = new EmbedBuilder()
        .setDescription(`***You have been unmuted in TUI [PTFS]***`)
        .setColor("Red") 
        try {
            await user.send({embeds: [dmEmbed]});
        } catch (err) {
            console.log(err);
        }
        member.timeout(null, "Member unmuted");

        const embed = new EmbedBuilder()
        .setDescription(`:white_check_mark: ***Successfully unmuted ${user.tag}***`)
        .setColor("Green")
        .setFooter({text: `User ID: ${user.id}`})
        message.channel.send({embeds: [embed]})
        
    }
};