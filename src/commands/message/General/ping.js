module.exports = {
    name: "ping",
    aliases: ["pong"],
    description: "Returns the bot client",
    
    async execute (client, message, args) {
        message.channel.send( `Pong! Your current ping is at a whopping \`${client.ws.ping}\`. `);
    }
};