const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const warningSchema = require("../../../Schemas/warnSchema");

module.exports = {
    name: "warnings",
    aliases: ["warnings"],
    description: "Check a user's warnings",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) return message.reply(`This command is restricted to staff members. [${message.author}]`);
        const guildID = message.guild.id;
        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `.warnings <user>`")
        var member;
        try {
            member = await message.guild.members.fetch(user);
        } catch (err) {
            member = null;
        }
        if (member) {
            if(member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply("You cannot check the warnings of a fellow staff member!");
        }
        
        const embed = new EmbedBuilder()
        const noWarns = new EmbedBuilder()
    
        warningSchema.findOne({GuildID: guildID, UserID: user.id, UserTag: user.tag }).then( data => {
    
           // if (err) throw err;
    
            if (data) {
                embed.setColor("Blue")
                .setDescription(`:white_check_mark: ${user.tag}'s warnings: \n${data.Content.map(
                    (w, i) => 
                        `
                            **Warnings:** ${i + 1}
                            **Warning Moderator:** ${w.ExecuterTag}
                            **Warn Reason:** ${w.Reason}
                        `
                ).join('-')}`)
    
                message.channel.send({embeds: [embed]}); 
            } else {
                noWarns.setColor("Blue")
                .setDescription(`:white_check_mark: ${user.tag} has no warnings.`)
    
                message.channel.send({embeds: [noWarns]})
            }
            
        });
       
    }
};