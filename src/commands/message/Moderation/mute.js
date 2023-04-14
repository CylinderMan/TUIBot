const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "mute",
    aliases: ["mute"],
    description: "Mute someone from the server",
    
    async execute (client, message, args) {
        const logChannel = message.guild.channels.cache.find(c => c.name === "bot-logs");
        if(!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply(`This command is restricted to staff members. [${message.author}]>`);

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `.mute <user> <time> <reason>`")
        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch (err) {
            member = null;
        }
        if (member) {
            if(member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply("You cannot mute a fellow staff member!");
        }
        const time = args[1];
        const reason = args.slice(2).join(" ");

        if (!time) return message.reply("Please use the following format: `.mute <user> <time> <reason>`")
        if (!reason) return message.reply("Please use the following format: `.mute <user> <time> <reason>`");

        let parsedTime = ms(time);

        const log = new EmbedBuilder()
        .setTitle(`Member muted | ${user.tag}`)   
        .setColor("Red")
        .addFields(
            {name: "User", value: `${user.tag}`},
            {name: "Responsible Moderator", value: `${message.author}`},
            {name: "Reason", value: `${reason}`},
            {name: "Time", value: `${time}`}
            )
        .setThumbnail(member.user.displayAvatarURL({dymaic: true}))
        .setFooter({text: `User ID: ${user.id}`})
        .setTimestamp()
        logChannel.send({embeds: [log]});

        const dmEmbed = new EmbedBuilder()
        .setDescription(`***You have been muted in TUI [PTFS]*** | ${reason}`)
        .setColor("Red") 
        try {
            await user.send({embeds: [dmEmbed]});
        } catch (err) {
            console.log(err);
        }
        await member.timeout(parsedTime, reason);

        const embed = new EmbedBuilder()
        .setDescription(`:white_check_mark: ***Successfully muted ${user.tag}*** | ${reason}`)
        .setColor("Green")
        .setFooter({text: `User ID: ${user.id}`})
        message.channel.send({embeds: [embed]})
        
    }
};