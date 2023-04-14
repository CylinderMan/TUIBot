const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "meme",
    aliases: ["meme"],
    description: "Get a meme",
    
    async execute (client, message, args) {
       async function meme() {
        await fetch (`https://www.reddit.com/r/memes/random/.json`)
        .then (async r => {

            let meme = await r.json();

            let title = meme[0].data.children[0].data.title;
            let image = meme[0].data.children[0].data.url;
            let author = meme[0].data.children[0].data.author;

            const embed = new EmbedBuilder()
            .setColor(`2091eb`)
            .setTitle(`${title}`)
            .setImage(`${image}`)
            .setURL(`${image}`)
            .setFooter({text: author})

            message.channel.send({embeds: [embed]});
        })
       }
       meme();
    }
};