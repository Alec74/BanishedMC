const router = require('express').Router();
const { User, Message } = require('../models');
const { QueryTypes } = require('sequelize');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { getAttributes } = require('../models/User');


router.get('/', async (req, res) => {
  res.render('homepage')
})
router.get('/announcements', async (req, res) => {
  try {
    // sequelize model used to findAll messages
    const allMessages = await Message.findAll();
    const messages = allMessages.map((message) => message.get({plain: true}));
    // console.log(messages)
    // const content = messages[0].id

    
    // console.log(content)
    res.render('announcements', {messages})
    // console.log(messages)
  } catch {
    res.status(500);
  }
  
})
router.get('/options', async (req, res) => {
  res.render('options')
})
router.get('/', async (req, res) => {
  res.render('homepage')
})

// Prevent non logged in users from viewing the dev
router.get('/dev', withAuth, async (req, res) => {
  try {
    const allMessages = await Message.findAll();
    const messages = allMessages.map((message) => message.get({plain: true}));
    res.render('dev', {
      messages,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/dev');
    return;
  }

  res.render('login');
});

module.exports = router;
