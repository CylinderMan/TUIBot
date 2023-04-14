const {EmbedBuilder, PermissionFlagsBits} = require("discord.js");
const BitlyClient = require("bitly").BitlyClient;
const bitly = new BitlyClient("050f52e0d6704c873f291ed918ed6a0c5b0cbe69"); // You can get yours from https://app.bitly.com/settings/api/ after logging in.


module.exports = {
    name: "shortenlink",
    aliases: ["shortenlink"],
    description: "Shorten links",
    
    async execute (client, message, args) {
        if(!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply(`This command is restricted to staff members. [${message.author}]`);

        const link = args.slice(0).join(" ");
        const embed = new EmbedBuilder();

        try {
            if (!link.match(/^(http:\/\/.|https:\/\/.|http:\/\/|https:\/\/)/)) {
              link = "https://" + link;
            }
            if (
              link.match(
                /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
              )
            ) {
              let result;
              try {
                result = await bitly.shorten(link);
              } catch (e) {
                throw e;
              }
              return message.reply({
                embeds: [
                  embed
                    .setTitle(`${message.author.username} - Bitly Link Shortener`)
                    .setDescription(`Old link: ${link}\nNew link: ${result.link}`)
                    .setColor("Orange")
                    .setTimestamp(),
                ],
              });
            } else {
              return message.reply({
                embeds: [embed.setColor("Red").setDescription("`INVALID LINK`")],
              });
            }
          } catch (err) {
            console.log(err);
            message.reply({
              embeds: [
                embed
                  .setColor("Red")
                  .setTitle("An error has occured!")
                  .setDescription(
                    "Try to add `https://` and `www.` before the link. If the issue persists, please contact the developer."
                  ),
              ],
            });
          }
    }
};