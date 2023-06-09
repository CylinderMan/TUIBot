const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["help"],
    description: "See the commands",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Command Categories")
       .setDescription("To view the commands of each category use `.<category>help` (all lowercase)")
       .setColor(`#2091eb`)
       .addFields(
        {name: "Aircraft", value: "Commands related to aircraft"},
        {name: "Community", value: "Commands related to the community"},
        {name: "General", value: "General commands that can be used by anyone"},
        {name: "Memes", value: "Commands just for fun"},
        {name: "Minigames", value: "Commands that allow you to play certain minigames"},
        {name: "Moderation", value: "Commands used only by staff"},
       )

        message.channel.send({embeds: [embed]});
    }
};