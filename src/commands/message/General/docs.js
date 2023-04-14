const { EmbedBuilder } = require("discord.js");
const Docs = require("discord.js-docs");

const branch = "stable";
const max = 1024;

const replaceDisco = (str) =>
  str
    .replace(/docs\/docs\/disco/g, `docs/discord.js/${branch}`)
    .replace(/ \(disco\)/g, "");

module.exports = {
    name: "docs",
    aliases: ["docs"],
    description: "Search discord docs",

    async execute(client, message, args) {
        const query = args.slice(0).join(" ");

        const doc = await Docs.fetch(branch);
        const results = await doc.resolveEmbed(query);


        if (!results) {
            return message.reply("Could not find that documentation.");
        }

        const string = replaceDisco(JSON.stringify(results));
        const embed = JSON.parse(string);

        embed.author.url = `https://discord.js.org/#/docs/discord.js/${branch}/general/welcome`;

        const match =
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.exec(
                embed.description
            );
        const extra = match ? "\n\nView more here: " + match[0].split(")")[0] : "";

        for (const field of embed.fields || []) {
            if (field.value.length >= max) {
                field.value = field.value.slice(0, max);
                const split = field.value.split(" ");
                let joined = split.join(" ");

                while (joined.length >= max - extra.length) {
                    split.pop();
                    joined = split.join(" ");
                }

                field.value = joined + extra;
            }
        }

        if (
            embed.fields &&
            embed.fields[embed.fields.length - 1].value.startsWith("[View source")
        ) {
            embed.fields.pop();
        }

        return message.reply({ embeds: [embed] });
    },
};