const Discord = require("discord.js");
require('dotenv').config();

// Before running this file
// TODO add token of banishedmc bot to .env file locally, don't git commit that file

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });

let test = () => { //function being exported to server
    const token = process.env.DISCORD_TOKEN; //set the token from environment
    let content = []; //create array to store messages
    client.once('ready', () => {
        //TODO change id in fetch to news channel
        client.channels.fetch('750114046887329885') //fetch a channel by id 
            .then(channel => channel.messages.fetch({limit:100}).then(messages => { //fetch the messages withing the channel
                for (let i = 0; i < messages.size ; i++){ //for every message in the channel up to 100 add it to the array
                    content.push(messages.toJSON()[i].content);
                    // console.log(messages.toJSON()[i].content);
                }
                // console.log(messages.toJSON()[2].mentions.users.toJSON()[0].username)
            }))
            .catch(console.error)
        
    });
    client.login(token); //starts the bot
}
module.exports = test;
