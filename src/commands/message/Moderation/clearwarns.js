const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const warningSchema = require("../../../Schemas/warnSchema");

module.exports = {
    name: "clearwarns",
    aliases: ["clearwarns"],
    description: "Ckear a user's warnings",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return message.reply(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`);
        const guildID = message.guild.id;
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `?clearwarns <user>`")
        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch (err) {
            member = null;
        }
        if (member) {
            if(member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply("You cannot clear the warns of a fellow staff member!");
        }

        const embed = new EmbedBuilder()

        warningSchema.findOne({GuildID: guildID, UserID: user.id, UserTag: user.tag }).then( data => {

        //if (err) throw err;

        if (data) {
                warningSchema.findOneAndDelete({ GuildID: guildID, UserID: user.id, UserTag: user.tag })

                embed.setColor("Blue")
                .setDescription(`:white_check_mark: ${user.tag}'s warnings have been cleared!`)

                message.channel.send({embeds: [embed]});
        } else {
            message.reply(`${user.tag} has no warnings to be cleared. `)
        }

        });
       
    }
};