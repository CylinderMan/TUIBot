const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "aircrafthelp",
    aliases: ["aircrafthelp"],
    description: "See the aicraft commands",
    
    async execute (client, message, args) {
       const embed = new EmbedBuilder()
       .setTitle("Aircraft")
       .setColor(`#2091eb`)
       .addFields(
        {name: ".metar", value: "Displays the metar of a given airport `.metar <Airport Code>`"},
        {name: ".simbrief", value: "Takes you to the dispatch page of Simbrief `.simbrief`"},
        {name: ".taf", value: "Displays the TAF of a given airport `.taf <airport>`"},
        {name: ".station", value: "Displays the station information of a given airport `.station <airport>`"},
        {name: ".generate-squawk", value: "Generate a squawk! `.generate-squawk`"},
       )

        message.channel.send({embeds: [embed]});
    }
};