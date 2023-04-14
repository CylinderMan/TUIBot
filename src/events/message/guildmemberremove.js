const {Events, EmbedBuilder} = require("discord.js");

module.exports = {
    name: Events.GuildMemberRemove,
    async execute (client, member) {
       const leaveChannel = member.guild.channels.cache.get("1090332036058861718")

        const leaveEmbed = new EmbedBuilder()
        .setTitle(`${member.user.username} has departed! :airplane_departure:`)
        .setDescription("We hope to see you again soon!")
        .setColor("Red")
        .setThumbnail(member.user.displayAvatarURL({dymaic: true}))
        .setFooter({text: `ID: ${member.user.id}`})
        .setTimestamp()

        leaveChannel.send({embeds: [leaveEmbed]})
    }
}