const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "ban",
    aliases: ["ban"],
    description: "Ban someone from the server",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply(`This command is restricted to staff members. [${message.author}]`);

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `.ban <user> <reason>`")
        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch (err) {
            member = null;
        }
        if (member) {
            if(member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply("You cannot ban a fellow staff member!");
        }

        const reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Please use the following format: `.ban <user> <reason>`");
        const logChannel = message.guild.channels.cache.find(c => c.name === "bot-logs");

        const log = new EmbedBuilder()
        .setTitle(`Member banned | ${user.tag}`)   
        .setColor("Red")
        .addFields(
            {name: "User", value: `${user.tag}`},
            {name: "Responsible Moderator", value: `${message.author}`},
            {name: "Reason", value: `${reason}`}
            )
        .setThumbnail(member.user.displayAvatarURL({dymaic: true}))
        .setFooter({text: `User ID: ${user.id}`})
        .setTimestamp()
        logChannel.send({embeds: [log]});

        const dmEmbed = new EmbedBuilder()
        .setDescription(`***You have been banned from TUI [PTFS]*** | ${reason}`)
        .setColor("Red") 
        try {
            await user.send({embeds: [dmEmbed]});
        } catch (err) {
            console.log(err);
        }
        message.guild.members.ban(user);

        const embed = new EmbedBuilder()
        .setDescription(`:white_check_mark: ***Successfully banned ${user.tag}*** | ${reason}`)
        .setColor("Green")
        .setFooter({text: `User ID: ${user.id}`})
        message.channel.send({embeds: [embed]})

    }
};