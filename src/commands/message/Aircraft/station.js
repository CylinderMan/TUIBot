const { EmbedBuilder } = require("discord.js");
const configfile = require("../../../../config.json");

module.exports = {
    name: "station",
    aliases: ["station"],
    description: "Check station information about an airport",

    async execute(client, message, args) {
        const icao = args[0];

        try {
            const stationReport = await fetch(`https://avwx.rest/api/station/${icao}`, {
                method: 'GET',
                headers: { Authorization: configfile.AVWX_API_KEY },
            }).then((res) => res.json());

            const runwayIdents = stationReport.runways.map((runways) => `**${runways.ident1}/${runways.ident2}:** `
            + `${runways.length_ft} ft x ${runways.width_ft} ft / `
            + `${Math.round(runways.length_ft * 0.3048)} m x ${Math.round(runways.width_ft * 0.3048)} m`);

            const embed = new EmbedBuilder()
            .setTitle(`Station Info | ${stationReport.icao}`)
            .setColor("Blue")
            .addFields(
                {name: "Name", value: `${stationReport.name}`},
                {name: "Country", value: `${stationReport.country}`},
                {name: "City", value: `${stationReport.city}`},
                {name: "Latitude", value: `${stationReport.latitude}°`},
                {name: "Longitude", value: `${stationReport.longitude}°`},
                {name: "Elevation", value: `${stationReport.elevation_m} m/${stationReport.elevation_ft} ft`},
                {name: "Runways (Ident1/Ident2: Length x Width):", value: `${runwayIdents.toString().replace(/,/g, '\n')}`},
                {name: "Type", value: `${stationReport.type.replace(/_/g, ' ')}`},
                {name: "Website", value: `${stationReport.website}`},
                {name: "Wiki", value: `${stationReport.wiki}`},
            )

            message.reply({embeds: [embed]});
        } catch (e) {
            console.log(e);
        }
    }
}