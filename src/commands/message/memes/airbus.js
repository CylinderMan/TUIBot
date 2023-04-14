const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "airbus",
    aliases: ["airbus"],
    description: "airbus",
    
    async execute (client, message, args) {

        const wait = async(milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds);
            })
        }

        message.channel.send("2500");
        await wait(5000);
        message.channel.send("100");
        await wait(5000);
        message.channel.send("50");
        await wait(5000);
        message.channel.send("40");
        await wait(5000);
        message.channel.send("30");
        await wait(5000);
        message.channel.send("20");
        await wait(5000);
        message.channel.send("**OUCH! THAT WAS A HARD LANDING!**");
        await wait(2000);
        message.channel.send("RETARD RETARD RETARD");
        await wait(2000);
        message.channel.send("https://media.discordapp.net/attachments/997509327868928100/1079827232006078525/image0.gif");
    }
};