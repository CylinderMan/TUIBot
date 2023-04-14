const { EmbedBuilder} = require("discord.js");
const wiki = require("wikijs").default();

module.exports = {
    name: "wikipedia",
    aliases: ["wiki"],
    description: "Search up something on wikipedia",
    
    async execute (client, message, args) {
        const query = args.slice(0).join(" ");
        
        const search = await wiki.search(query);
        if (!search.results.length) return message.reply("Wikipedia doesn't seem to know what you are talking about...");

        const result = await wiki.page(search.results[0]);

        const summary = await result.summary()
        if (summary.length > 8192) return await message.reply(`${summary.slice(0, 2048)}`);
        else {
            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle(`Wiki Search: ${result.raw.title}`)
            .setDescription(`\`\`\`${summary.slice(0, 2048)}\`\`\``)

            await message.reply({embeds: [embed]});
        }
    }
};