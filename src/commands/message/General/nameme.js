module.exports = {
    name: "nameme",
    aliases: ["nameme"],
    description: "Returns a name",
    
    async execute (client, message, args) {
        let nicknames = ["Walter White", "Dream Stan", "Big Chungus", "Master of the Butters", "Gigachad", "Toxic Kid", "Fatherless bozo", "Donkey", "Troll", "Internet Addict", "I HOPE YOU REALISE THAT YOU ARE NO LONGER SAFE HAHAHHA", "do u kno da wae", "Saddo", "Genshin Impact Player", "Memer", "jam", "Depressed Child", "Edgy Emo"];
    message.channel.send(`${nicknames[Math.floor(Math.random()*nicknames.length)]} is your new name!`);
    }
};