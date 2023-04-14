const {Events} = require("discord.js");
const mongoose = require("mongoose");
const configfile = require("../../../config.json");
module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute (client) {
        console.log(`Logged in as ${client.user.tag}`);

        mongoose.connect(configfile.mongodb || " ", {
          keepAlive: true,
        });
      
        if (mongoose.connect) {
          console.log("MongoDB connection successful.")
        }
    }
}