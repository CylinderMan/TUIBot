const {EmbedBuilder, ChannelType} = require("discord.js");

module.exports = {
    name: "serverinfo",
    aliases: ["serverinfo"],
    description: "Check the server's info",
    
    async execute (client, message, args) {
        const guild = message.guild;
        const name = guild.name;
        const serverId = guild.id;
        const creationDate = Math.floor(guild.createdTimestamp / 1000);
        const owner = await guild.fetchOwner();
        const members = await guild.memberCount;
        const textChannels = guild.channels.cache.filter((c) => 
            c.type === ChannelType.GuildText).size;
    
        const voiceChannels = guild.channels.cache.filter((c) => 
            c.type === ChannelType.GuildVoice).size;
    
        const roles = guild.roles.cache.size;
        const totalBoosts = guild.premiumSubscriptionCount;
        let boostTier = guild.premiumTier;
        
        const embed = new EmbedBuilder()
        .setColor("Random")
        .setThumbnail("https://images-ext-2.discordapp.net/external/BL2RkA1wlCJjX15e4QG0QWiNqID5Oz-QIZngdpnBYbw/https/cdn-longterm.mee6.xyz/plugins/welcome/images/991363875578589326/bb7ccbda5619daa72f7760ddd7cfb82f678550793dc12ab51e22fe76294d1ad8.gif")
        .setTitle("Server Info")
        .setDescription(`**${name}'s** server information`)
        .addFields(
            { name: `:id: Server ID`, value: `${serverId}`},
            { name: `:calendar: Created at`, value: `<t:${creationDate}>`},
            { name: `:crown: Owned by`, value: `${owner}`},
            {name: `:busts_in_silhouette: Member Count`, value: `${members}`},
            {name: `:speech_balloon: Text Channels`, value: `${textChannels}`},
            {name: `:microphone2: Voice Channels`, value: `${voiceChannels}`},
            {name: `:label: Roles`, value: `${roles}`},
            {name: `:crystal_ball: Total Boosts`, value: `${totalBoosts}`},
            {name: `:medal: Boost Teir`, value: `${boostTier}/3`},
        )
        .setTimestamp()
    
        message.channel.send({embeds: [embed]});
    }
};