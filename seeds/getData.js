const Discord = require("discord.js");
require('dotenv').config();
const fs = require('fs');


const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS] });

let content = []; //create array to store messages
let message_id = [];
let author = [];
let message_embed = [];
let mentions = [];
let message_embed_url = [];
let createdTimestamp = [];
let attachments = [];


let userNames = [];
let members_id = [];
let allUsers = [];


let all = [];

let test = () => { //function being exported to server
    const token = process.env.DISCORD_TOKEN; //set the token from environment
    client.once('ready', () => {
        // fs.truncate('./seeds/all.json', 0, function () { console.log('done') });
        // fs.writeFile('./seeds/all.json', '[]', function () { console.log('all.json') });
        client.channels.fetch('947289216885354556') //fetch a channel by id 
            .then(channel => channel.messages.fetch({ limit: 100 }).then(messages => { //fetch the messages withing the channel
                
                for (let i = 0; i < messages.size; i++) { //for every message in the channel up to 100 add it to the array
                    content.push(messages.toJSON()[i].content); //comma seperated values of content
                    message_id.push(messages.toJSON()[i].id); //csv of message_ids
                    author.push(messages.toJSON()[i].author.username); //authors
                    message_embed.push(messages.toJSON()[i].embeds);
                    mentions.push(messages.toJSON()[i].mentions.users.toJSON());
                    createdTimestamp.push(messages.toJSON()[i].createdTimestamp);
                    attachments.push(messages.toJSON()[i].attachments.toJSON())
                    // console.log(createdTimestamp[i]);
                    all.push({
                        "id": i + 1,
                        "content": content[i],
                        "message_id": message_id[i],
                        "author": author[i],
                        "message_embed": message_embed[i],
                        "message_attachments": attachments[i],
                        "mentions": mentions[i],
                        "createdTimestamp": createdTimestamp[i]
                    })
                    // console.log(messages)
                }

                // for (let k = 0; k < message_embed.length; k++){
                //     if(message_embed[k].length){
                //         message_embed_url.push(message_embed[k][0].url)
                //     }
                // }
                // console.log(messages)
                // console.log(attachments);




                let allSend = JSON.stringify(all);

                // write all discord messages from news channel to file
                // if (require('./all.json')){
                
                // fs.writeFile('./seeds/all.json', allSend, function () { console.log('all.json') });
                // }else {
                fs.writeFileSync('./seeds/all.json', allSend);
                console.log('writing messages');
                // }




            }))
            .catch(console.error)


    });
    client.login(token); //starts the bot

}
// test();

const getMembers = () => {
    const token = process.env.DISCORD_TOKEN; //set the token from environment

    const id = '946934949045497857';

    client.once('ready', () => {
        // fs.truncate('./seeds/allMembers.json', 0, function () { console.log('done') });

        const guild = client.guilds.cache.find((g) => g.id === id);
        if (!guild)
            console.log(`Can't find any guild with the ID "${id}"`);

        guild.members
            .fetch()
            .then((members) => {
                
                members.forEach((member) => {
                    // console.log(member.user.username);
                    userNames.push(member.user.username);
                    members_id.push(member.user.id);
                });
                for (let i = 0; i < userNames.length; i++) {
                    allUsers.push({
                        "id": i + 1,
                        "username": userNames[i],
                        "userId": members_id[i]
                    })
                }

                let memberSend = JSON.stringify(allUsers);
                
                fs.writeFileSync('./seeds/allMembers.json', memberSend);
                console.log('writing members');
                // console.log(allUsers);
                // console.log(userNames);
                // console.log(members_id);
            });
    });
    client.login(token);
};

const sendToNews = (msg) => {
    const token = process.env.BOT_TOKEN; //set the token from environment

    client.on('ready', () => {
        client.channels.fetch('947289216885354556')
            .then(channel => channel.send(msg))
    })
    client.login(token);
}


module.exports = { test, getMembers, sendToNews };
