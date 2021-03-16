const { Post } = require('../models');

const postdata = [
  {
  title: 'MWP Designs rocks!',
  post_url: 'www.google.com',
  created_at: 07/02/2021,
  // username: 'Mark P'
  },
  {
    title: 'YouTube Shuts down!',
    post_url: 'www.youtube.com',
    created_at: 07/01/1974,
    // username: 'Kathryn P'
    }
  // {
  //   title: 'Donec posuere metus vitae ipsum.',
  //   post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
  //   user_id: 10
  // },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
