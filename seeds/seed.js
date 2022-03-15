const sequelize = require('../config/connection');
const { User, Message } = require('../models');
require('dotenv').config();

// const userData = require('./userData.json');
const allData = require('./all.json');

const user = process.env.DEV_USER;
const email = process.env.DEV_EMAIL;
const password = process.env.DEV_PASSWORD;

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // User.truncate();


  const users = await User.bulkCreate([
    {
      id: 1,
      name: `${user}`,
      email: `${email}`,
      password: `${password}`
    }
  ]);

  const messages = await Message.bulkCreate(allData, {})

  process.exit(0);
};

seedDatabase();
