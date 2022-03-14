const sequelize = require('../config/connection');
const { User, Message } = require('../models');
// const test = require('../discordBot/testing');

const userData = require('./userData.json');
const allData = require('./all.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const messages = await Message.bulkCreate(allData, {})

  process.exit(0);
};

seedDatabase();
