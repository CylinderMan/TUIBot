const {EmbedBuilder} = require("discord.js");
const moment = require("moment");

module.exports = {
    name: "userinfo",
    aliases: ["userinfo"],
    description: "Check a user's info",
    
    async execute (client, message, args) {

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.reply("Please use the following format: `?userinfo <user>`")

        const member = await message.guild.members.fetch(user.id);

        const embed = new EmbedBuilder()
        .setTitle(`${user.username}'s information:`)
        .addFields(
            { name: "Username: ", value: `${user.username}`},
            { name: "ID:", value: `${user.id}`},
            { name: "Roles:", value: `${member.roles.cache.map(r => r).join('').replace("@everyone", "")}`},
            { name: "Server member since:", value: `${moment(member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-**${moment(member.joinedAt).startOf('day').fromNow()}`},
            { name: "Discord user since:", value: `${moment(user.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n**-**${moment(user.createdAt).startOf('day').fromNow()}`},
        )
        .setColor("Random")
        .setThumbnail(user.displayAvatarURL({dymaic: true}))
        .setTimestamp()

        message.channel.send({embeds: [embed]});
    }
};