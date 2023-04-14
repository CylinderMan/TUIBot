const {EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "link",
    aliases: ["link"],
    description: "Take a look at the link",
    
    async execute (client, message, args) {
       if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.channel.send(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`);

       const embed = new EmbedBuilder()
       .setTitle("Private Server Link")
       .setColor("#2091eb")
       .setDescription(`Our private server link is [here](https://www.roblox.com/games/20321167?privateServerLinkCode=48103280894279513262750703192763).`)

       message.reply({embeds: [embed]});
    }
};