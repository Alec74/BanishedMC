const router = require('express').Router();
const { Message } = require('../../models');
const allData = require('../../seeds/all.json')

//GET all messages
router.get('/', (req, res) => {
    //get all content from table
    Message.findAll().then((content) => {
        // console.log(content);
        res.json(content);
    })
})



module.exports = router;