const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "butter",
    aliases: ["butter"],
    description: "buttor",
    
    async execute (client, message, args) {

        const wait = async(milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds);
            })
        }

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
        message.channel.send("10");
        await wait(5000);
        message.channel.send("https://tenor.com/view/ryanair-butter-gif-26931843");
        await wait(2000);
        message.channel.send("**buttor**");
    }
};