const router = require('express').Router();

const userRoutes = require('./userRoutes');
const messageRoutes = require('./messageRoutes');
const memberRoutes = require('./memberRoutes');

router.use('/users', userRoutes);
router.use('/message', messageRoutes)
router.use('/members', memberRoutes)

module.exports = router;