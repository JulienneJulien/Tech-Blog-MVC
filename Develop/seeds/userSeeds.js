const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Apple',
    email: 'apple@gmail.com',
    password: 'password123'
  },
  {
    username: 'Banana',
    email: 'Banana@gmail.com',
    password: 'password456'
  },
  {
    username: 'Cherries',
    email: 'Cherries@gmail.com',
    password: 'password789'
  },
  {
    username: 'Grapes',
    email: 'Grapes@hotmail.com',
    password: 'password100'
  },
  {
    username: 'Kiwi',
    email: 'Kiwi@hotmail.com',
    password: 'password200'
  },
   {
    username: 'Mango',
    email: 'Mango@hotmail.com',
    password: 'password300'
  },
  {
    username: 'Orange',
    email: 'Orange@hotmail.com',
    password: 'password400'
  },
  ];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
