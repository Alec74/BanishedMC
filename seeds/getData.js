const Discord = require("discord.js");
require('dotenv').config();
const fs = require('fs');


const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

let content = []; //create array to store messages
let message_id = [];
let author = [];
let message_embed = [];
let mentions = [];
let message_embed_url = []

let all = [];

let test = () => { //function being exported to server
    const token = process.env.DISCORD_TOKEN; //set the token from environment

    client.once('ready', () => {
        //TODO change id in fetch to news channel
        client.channels.fetch('947289216885354556') //fetch a channel by id 
            .then(channel => channel.messages.fetch({limit:100}).then(messages => { //fetch the messages withing the channel
                for (let i = 0; i < messages.size ; i++){ //for every message in the channel up to 100 add it to the array
                    content.push(messages.toJSON()[i].content); //comma seperated values of content
                    message_id.push(messages.toJSON()[i].id); //csv of message_ids
                    author.push(messages.toJSON()[i].author.username); //authors
                    message_embed.push(messages.toJSON()[i].embeds);
                    mentions.push(messages.toJSON()[i].mentions.users);
                    // console.log(content);
                    all.push({
                        "id": i+1,
                        "content": content[i],
                        "message_id": message_id[i],
                        "author": author[i],
                        "message_embed": message_embed[i],
                        "mentions": mentions[i]
                    })
                }
                
                for (let k = 0; k < message_embed.length; k++){
                    if(message_embed[k].length){
                        message_embed_url.push(message_embed[k][0].url)
                    }
                }



                let allSend = JSON.stringify(all);
                
                // write all discord messages from news channel to file
                fs.writeFileSync('./seeds/all.json', allSend);


            }))
            .catch(console.error)
        
    });
    client.login(token); //starts the bot

}
// test();


module.exports = test;
