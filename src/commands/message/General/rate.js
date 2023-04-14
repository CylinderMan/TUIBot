const {EmbedBuilder} = require("discord.js");

module.exports = {
    name: "rate",
    aliases: ["rate"],
    description: "Rate something",
    
    async execute (client, message, args) {
        const ratingThing = args.slice(0).join(" ")
        if(!ratingThing) return message.reply("Please use the following format: `?rate <thing>`")
    
        let nicknames = ["0.5/10", "1/10", "1.5/10", "2/10", "2.5/10", "3/10", "3.5/10", "4/10", "4.5/10", "5/10", "5.5/10", "6/10", "6.5/10", "7/10", "7.5/10", "8/10", "8.5/10", "9/10", "9.5/10", "10/10", "69/10", "100000000/10", "haha yes", "aw hell naw", "terrible", "ew", "AAAAAAAA!!!!!!!", "fard", "No.", "nruh waffles", "huge no no", "bum", "foxlisoko", "boo", "im a cute monkey haha", "ngl this is sh", "tf"];
    
        const embed = new EmbedBuilder()
        .setColor("Random")
        .setDescription(`I would give **${ratingThing}** a **${nicknames[Math.floor(Math.random()*nicknames.length)]}**.`)
    
        message.channel.send({embeds: [embed]});
    }
};