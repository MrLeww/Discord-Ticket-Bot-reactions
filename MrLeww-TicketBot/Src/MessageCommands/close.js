const discordTranscripts = require('discord-html-transcripts');
const {supportTeam, transriptChannel} = require('../Credentials/Config')

module.exports = {
    name: "Close",
    aliases: ["close"],
    run: async(client, message, args) => {
        const channel = message.channel;
        const member = await message.guild.members.fetch(message.author);
        const user = await message.guild.members.fetch(channel.topic);
        const attachment = await discordTranscripts.createTranscript(channel, {
            poweredBy: false,
            saveImages: true
        });


        if(message.channel.name.startsWith('ticket')){
            if(member.roles.cache.has(supportTeam) || member.roles.cache.has('1019351403744997406')){
               try{
                user.send({files: [attachment]})
                const trnschannel = await message.guild.channels.fetch(transriptChannel);
                trnschannel.send({content: `Ticket Transcript of: ${user}`, files: [attachment]})
            }catch(err){
                throw err;
            }
                message.channel.send({content: 'Channel will be deleted in 5 seconds'})
                //setTimeout(() => message.channel.delete(), 5000)         
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