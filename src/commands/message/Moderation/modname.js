const {PermissionFlagsBits} = require("discord.js");

module.exports = {
    name: "modname",
    aliases: ["modname"],
    description: "Modname",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.ManageNicknames)) return message.reply(`This command is restricted to staff members. [${message.author}] <:ryan_despise:1021825072710828083>`);
        if(!message.mentions.users.first()) return message.reply("Please use the following format: `.modname <user>`");

        const user = message.mentions.members.first();
        const tagline = Math.floor(Math.random() * 10000) + 1;

        if(!user.kickable) return message.reply("I cannot change this user's nickname!");

        user.setNickname(`Moderated Nickname ${tagline}`).catch(err => {console.log("There was an error changing this user's nickname")});

        message.channel.send(`Nickname set to \`${tagline}\`.`);
    }
};