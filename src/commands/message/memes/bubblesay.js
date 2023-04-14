const {EmbedBuilder} = require("discord.js");
const figlet = require("figlet");

module.exports = {
    name: "bubblesay",
    aliases: ["bubblesay"],
    description: "Send a message bubble say",
    
    async execute (client, message, args) {
        const text = args.slice(0).join(" ");
        figlet.text(
            text,
            {
              font: "Standard",
            },
            async (err, data) => {
              message.channel.send(`\`\`\`${data}\`\`\``);
            }
          );
    }
};