const {PermissionFlagsBits, EmbedBuilder} = require("discord.js");
const configfile = require("../../../../config.json");
const https = require("https");

const ELEVENLABS_API_KEY = "f071f0beabb3e9f2a396266a159c6f6f"

module.exports = {
    name: "tts",
    aliases: ["tts"],
    description: "Send a tts message",
    
    async execute (client, message, args) {
        const text = args.slice(0).join(" ");

        const url = `https://api.eleven-labs.com/text-to-speech/v1/synthesize?text=${encodeURIComponent(text)}`;
        const headers = { 'xi-api-key': ELEVENLABS_API_KEY };

        const audio = await new Promise((resolve, reject) => {
            https.get(url, { headers, rejectUnauthorized: false }, (res) => {
                let data = [];
                res.on('data', (chunk) => {
                    data.push(chunk);
                });
                res.on('end', () => {
                    resolve(Buffer.concat(data));
                });
            }).on('error', reject);
        });
        await message.reply({ files: [ { attachment: audio, name: 'tts.mp3' } ] });
    }
};