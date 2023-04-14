const { PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "giveaway",
    aliases: ["giveaway"],
    description: "Host a giveaway",

    async execute(client, message, args) {
        if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply(`This command is restricted to staff members. [${message.author}]`);


    }
};