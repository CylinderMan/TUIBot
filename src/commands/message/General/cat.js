const { EmbedBuilder} = require("discord.js");
const axios = require('axios');

module.exports = {
    name: "cat",
    aliases: ["cat"],
    description: "Get a cat",
    
    async execute (client, message, args) {
        try {
            // Fetch cat picture from Some Random API
            const response = await axios.get('https://some-random-api.ml/img/cat');
            const catPic = response.data.link;

            // Build the embed
            const embed = new EmbedBuilder()
                .setColor('Blue')
                .setTitle('Random Cat Picture')
                .setImage(catPic)
                .setTimestamp();

            message.channel.send({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            message.reply('An error occurred while fetching cat picture data.');
        }
    }
};