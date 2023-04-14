const {EmbedBuilder, PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "tweet",
    aliases: ["faketweet"],
    description: "Send a fake tweet",
    
    async execute (client, message, args) {
        const tweet = args.slice(0).join(" ");
        let avatarUrl = message.author.avatarURL({ extension: "jpg" });
        let canvas = `https://some-random-api.ml/canvas/tweet?avatar=${avatarUrl}&displayname=${
          message.author.username
        }&username=${message.author.username}&comment=${encodeURIComponent(
          tweet
        )}`;
    
        const embed = new EmbedBuilder()
          .setTitle("Fake Tweet!")
          .setImage(canvas)
          .setTimestamp()
          .setColor("Random");
    
        await message.channel.send({
          embeds: [embed],
        });
    }
};