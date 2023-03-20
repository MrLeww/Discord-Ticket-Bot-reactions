const {supportTeam, transriptChannel} = require('../Credentials/Config')
const { Message } = require('discord.js')

module.exports = {
    name: "Remove",
    aliases: ["remove"],

    /**
	 * @param {Message} message
	 */

    run: async(client, message, args) => {
        const channel = message.channel;
        const user = message.mentions.users.first()
        const member = await message.guild.members.fetch(message.author);

        if(message.channel.name.startsWith('ticket-')){
            if(member.roles.cache.has(supportTeam) || member.roles.cache.has('1019351403744997406')){
                await channel.permissionOverwrites.delete(user).then(ch => {
                    ch.send(`${user} removed from the ticket.`)
                }) 
            }
        }
        else{
            if(!member.roles.cache.has(supportTeam) || !member.roles.cache.has('1019351403744997406')){
                message.author.send("You are not authorized to execute this command")
            }
            
            else{
                try{
                message.author.send({content: 'This is not a ticket channel'})
            }catch(err){
                throw err;
            }
            }
        }
    }
}