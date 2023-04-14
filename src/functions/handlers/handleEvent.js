const{readdirSync} = require("fs");
const ascii = require("ascii-table");
const table = new ascii("EVENTS, STATUS");


module.exports = (client) => {
    readdirSync("./src/events/").forEach((folder) => {
        const eventFiles = readdirSync(`./src/events/${folder}`).filter((file) => file.endsWith(".js"));
        for (const file of eventFiles) {
            const event = require(`../../events/${folder}/${file}`);
            if (event.name) {
                table.addRow(event.name, "Working");
                client.events.set(event.name, event);
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(client, ...args));
                } else {
                    client.on(event.name, (...args) => event.execute(client, ...args));
                }
            } else {
                table.addRow(file, "Error");
            }
        };
    });
    console.log(table.toString());
};