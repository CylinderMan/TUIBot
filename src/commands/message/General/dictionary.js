const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "dictionary",
    aliases: ["dictionary"],
    description: "look up a word",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.channel.send(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`)
       
        const word = args.slice(0).join(" ");

        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

        if (data.statusText === "Not Found") {
            return message.reply( "That word does not exist!")
        }

        let info = await data.json();
        let result = info[0];

        let embedInfo = await result.meanings.map((data, index) => {
            let definition = data.definitions[0].definition || "No definition found";
            let example = data.definitions[0].example || "No example found";

            return {
                name: data.partOfSpeech.toUpperCase(),
                value: `\`\`\` Definition: ${definition} \n Example: ${example} \`\`\``
            };
        });

        const embed = new EmbedBuilder()
        .setColor("Blue")
        .setTitle(`Definition of | **${result.word}**`)
        .addFields(embedInfo)

        await message.reply({embeds: [embed]});
    }
};