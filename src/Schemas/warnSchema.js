const { model, Schema } = require("mongoose");

const warningSchema = new Schema({
    GuildID: String,
    UserID: String,
    UserTag: String,
    Content: Array
});

module.exports = model("ryanBotWarnings", warningSchema);