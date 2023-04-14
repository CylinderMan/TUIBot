const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "generate-squawk",
    aliases: ["generate-squawk"],
    description: "Generate a sqawk",

    async execute(client, message, args) {

        function generateSquawk() {
            const squawk1 = Math.floor(Math.random() * 8);
            const squawk2 = Math.floor(Math.random() * 8);
            const squawk3 = Math.floor(Math.random() * 8);
            const squawk4 = Math.floor(Math.random() * 8);

            return `${squawk1}${squawk2}${squawk3}${squawk4}`;
        }

        const squawk = generateSquawk();

        const embed = new EmbedBuilder()
        .setTitle("Squawk Generator")
        .setColor("Blue")
        .setDescription(`Your squawk code is ${squawk}`)

        message.reply({embeds: [embed]});
    }
};