const router = require('express').Router();
const { Message } = require('../../models');

const test = require('../../seeds/getData');

//GET all messages
router.get('/', (req, res) => {
    //get all content from table
    Message.findAll().then((content) => {
        // console.log(content);
        res.json(content);
    })
})

// let previousData = require('../../seeds/all.json');
// console.log(previousData);


//Update entire db with current messages from channel
router.post('/discord', (req, res) => {
    let allData = [];
    test();
    allData = require('../../seeds/all.json');
    //set a delay between deletion of old data and updating new data incase multiple posts occur
    setTimeout(function(){
        Message.truncate();
        setTimeout(function(){
            Message.bulkCreate(allData);
        }, 4000)
        res.json("Data Refreshed");
    }, 10000);
    
});


module.exports = router;