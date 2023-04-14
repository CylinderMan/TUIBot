const {PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "nickname",
    aliases: ["nickname"],
    description: "Set the nickname of a user",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageNicknames)) return message.reply(`This command is restricted to staff members. [${message.author}]`);
        if(!message.mentions.users.first()) return message.reply("Please use the following format: `.nick <user> <name>`");

        const user = message.mentions.members.first();
        const name = args.slice(1).join(" ") || "No nickname provided"

        if(!user.kickable) return message.reply("I cannot change this user's nickname!");

        user.setNickname(name).catch(err => {console.log("There was an error changing this user's nickname")});

        message.channel.send(`Nickname set to \`${name}\`.`);
    }
};