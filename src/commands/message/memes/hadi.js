const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "hadi",
    aliases: ["hadi"],
    description: "hadi",
    
    async execute (client, message, args) {

        const wait = async(milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds);
            })
        }

       message.channel.send("he do be rich though");
       await wait(5000);
       message.channel.send("**boomin economy**");
       await wait(2000);
       message.channel.send("https://tenor.com/view/money-rich-gif-26230191");
    }
};