const {Events} = require("discord.js");

const {Configuration, OpenAIApi} = require("openai");

const configuration = new Configuration({
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const botChannel = "1090338835700912158";
const pastMessages = 5;

module.exports = {
    name: Events.MessageCreate,
    async execute (client, message) {
        if (message.author.bot) return
        if (message.channel.id !== botChannel) return

        message.channel.sendTyping()
    
        let messages = Array.from(await message.channel.messages.fetch({
            limit: pastMessages,
            before: message.id
        }))
        messages = messages.map(m=>m[1])
        messages.unshift(message)
    
        let users = [...new Set([...messages.map(m => m.author.username), client.user.username])]
    
        let lastUser = users.pop()
    
        let prompt = `The following is a conversation between ${users.join(", ")}, and ${lastUser}. \n\n`
    
        for (let i = messages.length - 1; i >= 0; i--) {
            const m = messages[i]
            prompt += `${m.author.username}: ${m.content}\n`
        }
        prompt += `${client.user.username}:`
    
        const response = await openai.createCompletion({
            prompt,
            model: "text-davinci-003",
            max_tokens: 500,
            stop: ["\n"]
        })

        await message.reply(response.data.choices[0].text)

    }
}