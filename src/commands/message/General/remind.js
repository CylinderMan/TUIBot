const {EmbedBuilder} = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "remind",
    aliases: ["remind"],
    description: "Reminder",
    
    async execute (client, message, args) {
        let reminder = args.slice(1).join(" ");
        let time = args[0];

        message.channel.send(`Okay <@${message.author.id}> you will be reminded in ${time}`)

        setTimeout(async function() {
            message.channel.send(`<@${message.author.id}> here is your reminder!`);

            const reminderAlertEmbed = new EmbedBuilder()
            .setColor("Blue")
            .setDescription(`You asked to be reminded about **${reminder}**.`)
            .setFooter({text: "Reminder Set"})
            .setTimestamp()

            message.channel.send({embeds: [reminderAlertEmbed]});
        }, ms (time));
    }
};