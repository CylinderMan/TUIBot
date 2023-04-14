const { EmbedBuilder } = require("discord.js")
const GphApiClient = require("giphy-js-sdk-core");
const configfile = require("../../../../config.json")

const giphy = GphApiClient(configfile.GIPHY_API_KEY);

module.exports = {
  name: "randomaircraft",
  aliases: ["randomaircraft"],
  description: "Returns a random aircraft",

  async execute(client, message, args) {
    giphy.search("gifs", { q: "aircraft" }).then(response => {
      const randomResult = response.data[Math.floor(Math.random() * response.data.length)];
      const aircraftEmbed = new EmbedBuilder()
      .setTitle("Randomly Generated Aircraft ")
      .setImage(randomResult.images.original.url)
      .setColor("#2091eb");
      message.channel.send({embeds: [aircraftEmbed]});
    });
  }
};