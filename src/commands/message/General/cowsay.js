const { EmbedBuilder } = require("discord.js");
const cowsay = require("cowsay")

module.exports = {
    name: "cowsay",
    aliases: ["cowsay"],
    description: "WHAT DOES THE COWSAY?",

    async execute(client, message, args) {

        const say = args.slice(0).join(" ");

        const cowText = cowsay.say({
            text: say,
            e: 'oO',
            T: 'U'
          });
      
        message.channel.send(`\`\`\`${cowText}\`\`\``);
    }
};