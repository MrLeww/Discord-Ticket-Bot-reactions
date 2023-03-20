const {EmbedBuilder, ChannelType, PermissionsBitField} = require('discord.js')
const { categoryID, everyoneID, supportTeam, admin } = require('../Credentials/Config')

const { QuickDB } = require('quick.db');
const db = new QuickDB();


module.exports = {
    name: "Ticket",
    ownerOnly: true,
    aliases: ["ticket"],
    run: async(client, message, args) => {

        /* 
        * DATABASE PART
        * DO NOT TOUCH        
        */

        // DATABASE NAMES
        const dbgeneral = await db.get("ticket.general");
        const dbdonations = await db.get("ticket.donations");
        const dbbugs = await db.get("ticket.bugs");
        const dbroles = await db.get("ticket.roles");
        const dbplayers = await db.get("ticket.players");
        const dbtechnical = await db.get("ticket.technical");


        if(dbgeneral === undefined){
            await db.set("ticket.general", 0)
        }
        if(dbdonations === undefined){
            await db.set("ticket.donations", 0)
        }
        if(dbbugs === undefined){
            await db.set("ticket.bugs", 0)
        }
        if(dbroles === undefined){
            await db.set("ticket.roles", 0)
        }
        if(dbplayers === undefined){
            await db.set("ticket.players", 0)
        }
        if(dbtechnical === undefined){
            await db.set("ticket.technical", 0)
        }
        /**
         * END OF DATABASE PART
         */




        const embed = new EmbedBuilder()
        .setDescription("**Tittle can go here **\nalso you can change this message in *src/Messagecommands/ticket.js*")


        const reactMessage = await message.channel.send({embeds: [embed]})
       //Change the emojis here//
        try{
        await reactMessage.react("<:Ticket_blue:1033874637320360026>")
        await reactMessage.react("<:ticket_green:1033874563521589359>")
        await reactMessage.react("<:ticket_orange:1033874564956041246>")
        await reactMessage.react("<:ticket_purple:1033874566520508457>")
        await reactMessage.react("<:ticket_red:1033874568001097769>")
        await reactMessage.react("<:ticket_yellow:1033874569108398100>")
        }
        catch(err){
            message.channel.send("Error send emojis")
            throw err
        }

        const collector = reactMessage.createReactionCollector((reaction, user) => message.guild.members.cache.find((member) => member.id === user.id), {dispose: true});

        collector.on('collect', async (reaction, user) =>{


            ///////////////THIS IS FOR ONE TICKETS AT A TIME/////////////////
            if(message.guild.channels.cache.some(ch => ch.name.includes(user.id))){
                try{
                user.send("You already have a ticket opened")
                }catch(err){
                    throw err;
                }
                return
            }

            switch (reaction.emoji.id){
                case "1033874637320360026":
                    await db.add("ticket.general", 1)
                    const ticketGeneral = String(await db.get("ticket.general")).padStart(4, 0)
                    await message.guild.channels.create({                    
                        name: `ticket-general-${ticketGeneral}`,
                        parent: categoryID,
                        type: ChannelType.GuildText,
                        topic: user.id,
                        permissionOverwrites: [
                            {
                                id: user.id,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: supportTeam,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: everyoneID,
                                deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            }
                        ]
                    }).then(ch => {
                        const embed = new EmbedBuilder().setDescription(`${user} Test 0`)
                        ch.send({embeds: [embed]})
                    });
                    break;

                case "1033874563521589359":
                    await db.add("ticket.donations", 1)
                    const ticketdonations = String(await db.get("ticket.donations")).padStart(4, 0)
                    await message.guild.channels.create({                    
                        name: `ticket-donations-${ticketdonations}`,
                        parent: categoryID,
                        type: ChannelType.GuildText,
                        topic: user.id,
                        permissionOverwrites: [
                            {
                                id: user.id,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: admin,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: everyoneID,
                                deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            }
                        ]
                    }).then(ch => {
                        const embed = new EmbedBuilder().setDescription(`${user} Test 1`)
                        ch.send({embeds: [embed]})
                    });
                break;

                case "1033874564956041246":
                    await db.add("ticket.bugs", 1)
                    const ticketbugs = String(await db.get("ticket.bugs")).padStart(4, 0)
                    await message.guild.channels.create({                    
                        name: `ticket-bugs-${ticketbugs}`,
                        parent: categoryID,
                        type: ChannelType.GuildText,
                        topic: user.id,
                        permissionOverwrites: [
                            {
                                id: user.id,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: supportTeam,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: everyoneID,
                                deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            }
                        ]
                    }).then(ch => {
                        const embed = new EmbedBuilder().setDescription(`${user} test 2`)
                        ch.send({embeds: [embed]})
                    });
                break;

                case "1033874566520508457":
                    await db.add("ticket.roles", 1)
                    const ticketroles = String(await db.get("ticket.roles")).padStart(4, 0)
                    await message.guild.channels.create({                    
                        name: `ticket-role-${ticketroles}`,
                        parent: categoryID,
                        type: ChannelType.GuildText,
                        topic: user.id,
                        permissionOverwrites: [
                            {
                                id: user.id,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: supportTeam,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: everyoneID,
                                deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            }
                        ]
                    }).then(ch => {
                        const embed = new EmbedBuilder().setDescription(`${user} Test 3`)
                        ch.send({embeds: [embed]})
                    });
                break;

                case "1033874568001097769":
                    await db.add("ticket.players", 1)
                    const ticketplayers = String(await db.get("ticket.players")).padStart(4, 0)
                    await message.guild.channels.create({                    
                        name: `ticket-reports-${ticketplayers}`,
                        parent: categoryID,
                        type: ChannelType.GuildText,
                        topic: user.id,
                        permissionOverwrites: [
                            {
                                id: user.id,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: admin,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: everyoneID,
                                deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            }
                        ]
                    }).then(ch => {
                        const embed = new EmbedBuilder().setDescription(`${user} Test 4`)
                        ch.send({embeds: [embed]})
                    });
                break;

                case "1033874569108398100":
                    await db.add("ticket.technical", 1)
                    const tickettechnical = String(await db.get("ticket.technical")).padStart(4, 0)
                    await message.guild.channels.create({                    
                        name: `ticket-technical-${tickettechnical}`,
                        parent: categoryID,
                        type: ChannelType.GuildText,
                        topic: user.id,
                        permissionOverwrites: [
                            {
                                id: user.id,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: supportTeam,
                                allow: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            },
                            {
                                id: everyoneID,
                                deny: [PermissionsBitField.Flags.ViewChannel,PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.AttachFiles,PermissionsBitField.Flags.ReadMessageHistory,PermissionsBitField.Flags.AddReactions]
                            }
                        ]
                    }).then(ch => {
                        const embed = new EmbedBuilder().setDescription(`${user} Test 5`)
                        ch.send({embeds: [embed]})
                    });
                break;                
            }
            
            if(!user.bot) reaction.users.remove(user.id)
            
        })

        
    }
}