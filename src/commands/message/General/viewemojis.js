const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "viewemojis",
    aliases: ["emojis"],
    description: "View all the emojis of the server",

    async execute(client, message, args) {
        const emojiList = message.guild.emojis.cache.map((e) => `${e} | \`${e}\``).join("\n") || "This server has no emojis.";
        const embed = new EmbedBuilder()
        .setTitle(`Emojis`)
        .setColor("Blue")
        .setDescription(`${emojiList}`)

        message.channel.send({ embeds: [embed] });
    }
};