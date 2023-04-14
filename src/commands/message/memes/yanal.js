const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "yanal",
    aliases: ["yanal"],
    description: "yanal",
    
    async execute (client, message, args) {

        const wait = async(milliseconds) => {
            await new Promise(resolve => {
                return setTimeout(resolve, milliseconds);
            })
        }

        message.channel.send("Yanal... the COO himself..");
        await wait(5000);
        message.channel.send("Most experienced pilot in the server...");
        await wait(5000);
        message.channel.send("Absolute chad..");
        await wait(5000);
        message.channel.send("*amman is my fav airport*");
        await wait(5000);
        message.channel.send("A good man..");
        await wait(5000);
        message.channel.send("A good man..");
        await wait(5000);
        message.channel.send("ima get some baklava");
        await wait(2000);
        message.channel.send("Shawarma ...");
        await wait(2000);
        
    }
};