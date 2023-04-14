const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");

module.exports = {
    name: "purge",
    aliases: ["purge"],
    description: "Purge nessages",
    
    async execute (client, message, args) {
            if(!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply(`This command is restricted to staff members. [${message.author}] `);
            if(!args[0]) return message.reply("Please use the following format: `.purge <number>`");
            if(isNaN(args[0])) return message.reply("Specify a valid number of messages to delete!");
        
            if(args[0] > 100) return message.reply("You need to specify a number less than 100.");
            if(args[0] < 1) return message.reply("You need to specify a number that is greater than 0.");
            const logChannel = message.guild.channels.cache.get("1090660013661491300")
        
            message.delete();
            await message.channel.messages.fetch({limit: args[0]}).then (messages => {
                message.channel.bulkDelete(messages);
        
                const logEmbed = new EmbedBuilder() 
                .setTitle("Bulk Delete")
                .setDescription(`**Bulk delete in <#${message.channel.id}>, ${messages.size} messages deleted**.`)
                .setColor("Blue")
                .setTimestamp()
        
                logChannel.send({embeds: [logEmbed]});
            })
}
}