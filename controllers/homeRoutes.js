const router = require('express').Router();

//set up express router for page changes
router.get('/', async (req, res) => {
    res.render('homepage');
});

router.get('/announcements', async (req, res) => {
    res.render('announcements');
});

module.exports = router;