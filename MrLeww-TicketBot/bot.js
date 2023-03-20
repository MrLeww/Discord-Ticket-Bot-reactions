(async () => {
const { Client, GatewayIntentBits, Partials, Collection, Events } = require("discord.js");
const CredentialManager = require("./Src/Credentials/Config");
const DirPath = __dirname;
const { MessageCommandHandler, EventManager } = require("./Src/Structures/Handlers/HandlersManager")

const DiscordClient = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildBans
    ],
    partials: [Partials.Channel, Partials.Message, Partials.Reaction]
});

exports.client = DiscordClient;
exports.rootPath = DirPath;

DiscordClient.limitCommandUses = new Collection()
DiscordClient.expireAfter = new Collection()
DiscordClient.messageCommands = new Collection()
DiscordClient.messageCommands_Aliases = new Collection()
DiscordClient.events = new Collection()


await MessageCommandHandler(DiscordClient, DirPath)
await EventManager(DiscordClient, DirPath)
await DiscordClient.login(CredentialManager.botToken)
})()