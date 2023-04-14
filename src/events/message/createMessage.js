const {Events} = require("discord.js");
const configfile = require("../../../config.json");
const usedCommandRecently = new Set();

module.exports = {
    name: Events.MessageCreate,
    async execute (client, message) {
        if (!message.guild || message.author.bot || !message.content.toLowerCase().startsWith(configfile.prefix)) return;

        const [cmd, ...args] = message.content.slice(configfile.prefix.length).trim().split(/ +/g);
        if (cmd.length === 0) return;

        const command = client.messagecmd.get(cmd.toLowerCase()) || client.messagecmd.find((c) => c.aliases?.includes(cmd.toLowerCase()));
        if (!command) return;

        try {
            command.execute(client, message, args);
        } catch (err) {
            console.log(err);
        }
    }
}