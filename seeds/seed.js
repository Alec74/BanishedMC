const sequelize = require('../config/connection');
const { User, Message, DiscordUser } = require('../models');
require('dotenv').config();

// const userData = require('./userData.json');
const allData = require('./all.json');
const allMembers = require('./allMembers.json');

const user1 = process.env.DEV_USER1;
const email1 = process.env.DEV_EMAIL1;
const password1 = process.env.DEV_PASSWORD1;
const user2 = process.env.DEV_USER2;
const email2 = process.env.DEV_EMAIL2;
const password2 = process.env.DEV_PASSWORD2;
// console.log(email2)

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // User.truncate();


  const users = await User.bulkCreate([
    {
      id: 1,
      name: `${user1}`,
      email: `${email1}`,
      password: `${password1}`
    },
    {
      id: 2,
      name: `${user2}`,
      email: `${email2}`,
      password: `${password2}`
    }
  ], {
    individualHooks: true,
    returning: true,
  });

  const messages = await Message.bulkCreate(allData, {});

  const discorduser = await DiscordUser.bulkCreate(allMembers, {});

  process.exit(0);
};

seedDatabase();
