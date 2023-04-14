const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

module.exports = {
    name: "chatgpt",
    aliases: ["chagpt"],
    description: "Ask chatgpt a question",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.channel.send(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`)
        const question = args.slice(0).join(" ");

        try {
            const res = await openai.createCompletion({
                model: "text-davinci-003",
                max_tokens: 2048,
                temperature: 0.5,
                prompt: question
            });

            const embed = new EmbedBuilder()
            .setColor("Blue")
            .setTitle(`${question}`)
            .setDescription(`\`\`\`${res.data.choices[0].text}\`\`\``)

            message.channel.send({embeds: [embed]});

        } catch (e) {
            return message.reply(`Request failed (bozo)`)
        }
    }
};