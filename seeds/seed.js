const sequelize = require('../config/connection');
const { User, Message } = require('../models');
require('dotenv').config();

// const userData = require('./userData.json');
const allData = require('./all.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  User.truncate();


  const users = await User.create({ 
    name: `${process.env.DEV_USER}`,
    email: `${process.env.DEV__EMIAL}`,
    password: `${process.env.DEV_PASSWORD}`
  });

  const messages = await Message.bulkCreate(allData, {})

  process.exit(0);
};

seedDatabase();
