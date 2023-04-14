const { EmbedBuilder } = require("discord.js");
const configfile = require("../../../../config.json");
const axios = require("axios");

module.exports = {
    name: "taf",
    aliases: ["taf"],
    description: "Sends the taf of a given airport code",

    async execute(client, message, args) {
        // Check if airport code is provided

        const icao = args[0];

        if (!args[0]) {
            return message.reply('Please provide an airport code');
        }

        try {
            const response = await axios.get(
                `https://avwx.rest/api/taf/${icao}?options=info`,
                {
                    headers: { Authorization: configfile.AVWX_API_KEY },
                }
            );
            const { raw, station } = response.data;

            const embed = new EmbedBuilder()
            .setTitle(`${icao} | TAF`)
            .setColor("Blue")
            .setDescription(`**Raw report for ${station}**: ${raw}`)

            message.reply({embeds: [embed]});
        } catch (error) {
            message.channel.send('Invalid ICAO code!');
        }
    }
};