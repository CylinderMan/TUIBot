const{readdirSync} = require("fs");
const ascii = require("ascii-table");
const table = new ascii("COMMANDS, STATUS");


module.exports = (client) => {
    readdirSync("./src/commands/message/").forEach((folder) => {
        const commandFiles = readdirSync(`./src/commands/message/${folder}`).filter((file) => file.endsWith(".js"));
        for (const file of commandFiles) {
            const command = require(`../../commands/message/${folder}/${file}`);
            if (command.name) {
                table.addRow(file.name, "Working");
                client.messagecmd.set(command.name, command);
            } else {
                table.addRow(file.name, "Error");
            };
        };
    });
    console.log(table.toString());
};