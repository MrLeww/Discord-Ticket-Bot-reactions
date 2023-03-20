const { ActivityType } = require("discord.js");
const chalk = require("chalk");
module.exports = {
    name: "ready",
    runOnce: true,
    run: async (DiscordClient) => {
        DiscordClient.user.setActivity("North spring Tickets", {
            type: ActivityType.Listening
        });

        console.log(chalk.bold.green(`Logging into ${DiscordClient.user.tag}.`))
        if (DiscordClient.messageCommands.size > 0) console.log(chalk.bold.blue("[MessageCommands]", `Loading ${DiscordClient.messageCommands.size} MessageCommands with ${DiscordClient.messageCommands_Aliases.size} Aliases.`))
        if (DiscordClient.events.size > 0) console.log(chalk.bold.yellow("[EventManager]", `Loading ${DiscordClient.events.size} Events.`))
    } 
}