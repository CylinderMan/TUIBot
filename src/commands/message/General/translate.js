const translate = require('translate-google');
const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "translate",
    aliases: ["translate"],
    description: "Translates sentences",
    
    async execute (client, message, args) {
        if (args.length < 2) {
            return message.reply('Please provide the text to translate and the target language');
          }
        
          // Get the text and target language from the command arguments
          const text = args.slice(0, -1).join(' ');
          const target = args[args.length - 1];
        
          try {
            // Translate the text to the target language
            const translation = await translate(text, { to: target });
        
            const embed = new EmbedBuilder()
            .setColor("Random")
            .setDescription(`**"${text}"** has been translated to ${target}: **${translation}**`)
        
            message.channel.send({embeds: [embed]});
          } catch (error) {
            console.error(error);
            message.reply('There was an error translating the text');
          }
    }
};