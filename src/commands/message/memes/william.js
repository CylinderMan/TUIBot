const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "william",
    aliases: ["william"],
    description: "william",
    
    async execute (client, message, args) {

        const wait = async(milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds);
            })
        }

       message.channel.send("absolute drunkyard");
       await wait(5000);
       message.channel.send("im not even gonna say anything else");
    }
};