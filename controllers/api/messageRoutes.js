const router = require('express').Router();
const { Message } = require('../../models');
const withAuth = require('../../utils/auth');
const fs = require('fs');

const { test, sendToNews } = require('../../seeds/getData');

let allData = [];

//GET all messages from db
router.get('/', (req, res) => {
    //get all content from table
    // test();
    Message.findAll().then((content) => {
        // console.log(content);
        res.json(content);
    })
})

//GET all messages from discord
router.get('/discord', (req, res) => {
    // let allData = [];
    // fs.writeFileSync('../../seeds/all.json', '');
    test();
    setTimeout(function(){
        allData = require('../../seeds/all.json');
        // console.log(allData);
        res.json(allData);
    }, 4000);
    
})


//Update entire db with current messages from channel
router.post('/discord', (req, res) => {
    try {
        // let allData = [];
        test();
        Message.truncate();
        setTimeout(async function(){
            allData = require('../../seeds/all.json');
            Message.bulkCreate(allData);
            res.status(200).json(allData);
        }, 8000)


    } catch (err) {
        res.status(400).json(err);
    }

});

router.post('/send', withAuth, async (req, res) => {
    try {
        let array = req.body;
        let newSend = '';
        for (let i = 0; i < array.length; i++) {
            newSend += `${array[i]} `;
        }

        // const newMessage = await Message.create({
        //     content: newSend,
        //     message_id: 'newsBot',
        //     author: 'BanishedMC Announcements',
        //     createdTimestamp: Date.now()
        // })
        // console.log(newSend);
        sendToNews(newSend);

        res.status(200).json(newSend);
    } catch (err) {
        res.status(400).json(err);
    }

    // console.log(newSend);

    // res.json('message sent');
})


module.exports = router;