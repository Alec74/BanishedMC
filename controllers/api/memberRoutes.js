const router = require('express').Router();
const { DiscordUser } = require('../../models');

const { getMembers } = require('../../seeds/getData');

//GET all members from db
router.get('/', (req, res) => {
    //get all content from table
    DiscordUser.findAll().then((members) => {
        // console.log(content);
        res.json(members);
    })
})

// let previousData = require('../../seeds/all.json');
// console.log(previousData);

// Get all members from discord
router.get('/discord', (req, res) => {
    let allMembers = [];
    getMembers();
    setTimeout(function () {
        allMembers = require('../../seeds/allMembers.json');
        // console.log(allMembers);
        res.json(allMembers);
    }, 10000)

})


router.post('/discord', (req, res) => {
    try {
        let allMembers = [];
        getMembers();
        DiscordUser.truncate();
        setTimeout(function () {
            allMembers = require('../../seeds/allMembers.json');
            DiscordUser.bulkCreate(allMembers);
            res.status(200).json(allMembers);
        }, 15000)
    } catch (err) {
        res.status(400).json(err);
    }

})




module.exports = router;