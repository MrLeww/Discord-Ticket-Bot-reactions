const {supportTeam, transriptChannel} = require('../Credentials/Config')
const { Message } = require('discord.js')


const { QuickDB } = require('quick.db');
const db = new QuickDB();


module.exports = {
    name: "db",
    aliases: ["db"],

    /**
	 * @param {Message} message
	 */

    run: async(client, message, args) => {
        const channel = message.channel;
        const user = message.mentions.users.first()
        const member = await message.guild.members.fetch(message.author);

        const dbNumber = await db.get("ticket.number");

        if(dbNumber === undefined){
            await db.set("ticket.number", 1)
        }
        else{
            await db.add("ticket.number", 1)
            const ticketNum = String(dbNumber + 1).padStart(3, 0)
            message.channel.send(`${ticketNum}`)
        }
        


        
    }
}