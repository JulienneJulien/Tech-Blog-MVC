const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    postText: 'Nam faucibus, magna vel elementum maximus, magna tellus tincidunt arcu, eu semper justo augue eget est.',
    userId: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    postText: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    userId: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    postText: 'Quisque nisi ante, auctor sed ex quis, consectetur tempor lacus.',
    userId: 1
  },
  {
    title: 'Nunc purus.',
    postText: 'Nulla mollis placerat tellus.',
    userId: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    postText: 'Nulla mollis placerat tellus.',
    userId: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    postText: 'Nunc ut ornare metus.',
    userId: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    postText: ' Sed tempus massa quis augue bibendum, vitae consectetur tellus imperdiet.',
    userId: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    postText: 'Praesent volutpat a neque et vestibulum.',
    userId: 1
  },
  {
    title: 'Duis ac nibh.',
    postText: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    userId: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    postText: 'Ut quam erat, auctor sit amet bibendum ut, posuere ut neque.',
    userId: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    postText: 'Vestibulum bibendum libero at mi euismod, et tincidunt arcu maximus.',
    userId: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    postText: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    userId: 10
  },
  {
    title: 'Donec dapibus.',
    postText: 'Aliquam nibh nibh, sagittis quis est sed, pellentesque finibus nisl.',
    userId: 8
  },
  {
    title: 'Nulla tellus.',
    postText: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    userId: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    postText: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    userId: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    postText: 'Etiam accumsan tincidunt consectetur.',
    userId: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    postText: 'Donec purus arcu, ultricies dapibus ante et, ullamcorper porta eros.',
    userId: 6
  },
  {
    title: 'Etiam justo.',
    postText: 'In ac suscipit turpis.',
    userId: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    postText: 'Nulla facilisi.',
    userId: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    postText: 'Cras tincidunt, mauris quis commodo lobortis, mauris augue tempor nisl, eget sagittis magna ex sed elit.',
    userId: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

