const router = require('express').Router();
const { DiscordUser } = require('../../models');

const {getMembers} = require('../../seeds/getData');

//GET all members
router.get('/', (req, res) => {
    //get all content from table
    DiscordUser.findAll().then((members) => {
        // console.log(content);
        res.json(members);
    })
})

// let previousData = require('../../seeds/all.json');
// console.log(previousData);

router.post('/discord', (req, res) => {
    let allMembers = [];
    getMembers();
    allMembers = require('../../seeds/allMembers.json');
    setTimeout(function(){
        DiscordUser.truncate();
        setTimeout(function(){
            DiscordUser.bulkCreate(allMembers);
        }, 4000)
        res.json("Data Refreshed");
    }, 10000)
})

//Update entire db with current messages from channel
// router.post('/discord', (req, res) => {
//     let allData = [];
//     test();
//     allData = require('../../seeds/all.json');
//     //set a delay between deletion of old data and updating new data incase multiple posts occur
//     setTimeout(function(){
//         Message.truncate();
//         setTimeout(function(){
//             Message.bulkCreate(allData);
//         }, 4000)
//         res.json("Data Refreshed");
//     }, 10000);
    
// });


module.exports = router;