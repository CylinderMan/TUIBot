const {Configuration, OpenAIApi} = require("openai");
const {EmbedBuilder} = require("discord.js");

const configuration = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

module.exports = {
    name: "imagine",
    aliases: ["image-generate"],
    description: "Make an image!",
    
    async execute (client, message, args) {
        const prompt = args.slice(0).join(" ")

        try {
            const response = await openai.createImage({
                prompt: `${prompt}`,
                n: 1,
                size: `1024x1024`
            });
            const image = response.data.data[0].url;

            const embed = new EmbedBuilder()
            .setColor(`2091eb`)
            .setTitle(`Here is your image of a \`\`\`${prompt}\`\`\``)
            .setImage(image)
            .setTimestamp()

            await message.channel.send({embeds: [embed]});
        } catch (e) {
            console.log(e);
        }
    }
};