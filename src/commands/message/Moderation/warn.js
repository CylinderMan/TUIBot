const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const warningSchema = require("../../../Schemas/warnSchema");

module.exports = {
    name: "warn",
    aliases: ["warn"],
    description: "Warn someone",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return message.reply(`This command is restricted to staff members. [${message.author}]`);
        const guildID = message.guild.id;
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `.warn <user> <reason>`")
        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch (err) {
            member = null;
        }
        if (member) {
            if(member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply("You cannot warn a fellow staff member!");
        }
    
        const reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Please use the following format: `?warn <user> <reason>`");
        const logChannel = message.guild.channels.cache.get("1090660013661491300")
    
        warningSchema.findOne({GuildID: guildID, UserID: user.id, UserTag: user.tag }).then( data => {
    
           // if (err) throw err;
    
            if (!data) {
                data = new warningSchema({
                    GuildID: guildID,
                    UserID: user.id,
                    UserTag: user.tag,
                    Content: [
                        {
                            ExecuterID: user.id,
                            ExecuterTag: user.tag,
                            Reason: reason
                        }
                    ],
                });
            } else {
                const warnContent = {
                    ExecuterID: user.id,
                    ExecuterTag: user.tag,
                    Reason: reason
                }
                data.Content.push(warnContent);
            }
            data.save()
        });
    
        const log = new EmbedBuilder()
        .setTitle(`Member warned | ${user.tag}`)   
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
        .setDescription(`***You have been warned in TUI [PTFS]*** | ${reason}`)
        .setColor("Red") 
        try {
            await user.send({embeds: [dmEmbed]});
        } catch (err) {
            console.log(err);
        }
        const embed = new EmbedBuilder()
        .setDescription(`:white_check_mark: ***Successfully warned ${user.tag}*** | ${reason}`)
        .setColor("Green")
        .setFooter({text: `User ID: ${user.id}`})
        message.channel.send({embeds: [embed]})
       
    }
};