const { Client, GatewayIntentBits, Partials, ActivityType, EmbedBuilder, PermissionFlagsBits, Collection, Events, ChannelType, ButtonStyle, ButtonBuilder, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
// Define intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.DirectMessageReactions,
  GatewayIntentBits.DirectMessageTyping,
  GatewayIntentBits.DirectMessages],
  partials: [Partials.Message, Partials.Reaction, Partials.Channel],
});

// Define variables, packages, etc
const configfile = require("./config.json");
const prefix = configfile.prefix;
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);


// Creating command/event handler
client.events = new Collection();
client.messagecmd = new Collection();

module.exports = client;

[
  "handleEvent",
  "handleMsgCmd",
].forEach((file) => {
  require(`./src/functions/handlers/${file}`)(client);
});

// Log in using the token
client.login(configfile.token)

// Should there be an error, the bot autorestarts

const process = require("node:process")

process.on("unhandledRejection", (reason, p) => {
  const ChannelID = "1089200272632467518";
  console.error("Unhandled promise rejection:", reason, p);
  const Embed = new EmbedBuilder()
    .setColor("Random")
    .setTimestamp()
    .setFooter({ text: "⚠️Anti Crash system" })
    .setTitle("Error Encountered");
  const Channel = client.channels.cache.get(ChannelID);
  if (!Channel) return;
  Channel.send({
    embeds: [
      Embed.setDescription(
        "**Unhandled Rejection/Catch:\n\n** ```" + reason + "```"
      ),
    ],
  });
});
