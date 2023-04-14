const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "invites",
    aliases: ["invites"],
    description: "Check a user's invites",
    
    async execute (client, message, args) {
            if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`);
            const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
            if(!user) return message.reply("Please use the following format: `?invites <user>`");
        
            let invites = await message.guild.invites.fetch();
            let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id);
        
            let i = 0;
            userInv.forEach(inv => i += inv.uses);
        
            const embed = new EmbedBuilder()
            .setColor(`#073590`)
            .setDescription(`${user.tag} has **${i}** invites`)
        
            message.channel.send({embeds: [embed]});
    }
}