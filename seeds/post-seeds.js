 const {Post} = require('../models');

 const postData = [
     {
         title: "Oasis greatest band ever!",
         post_url: "https://oasis.com",
         article: "Oasis has been voted the greatest band in the world by everyone.",
         username: "Mark"
     },
     {
         title: "Video Games cure cancer",
         post_url: "https://fakenews.com",
         article: "Video games have been found to cure certain forms of cancer.",
         username: "Dave J"
     },
     {
        title: "Playstation 5 back in stock",
        post_url: "https://playstation.com",
        article: "Sony has finally started producing enough PS5 consoles to keep up with demand.",
        username: "Mark P"
    },
    {
        title: "Web development basics",
        post_url: "https://webdev.com",
        article: "Learn web developement in 15 minutes by watching this video.",
        username: "James"
    },
 ]

 const seedPosts = Post.bulkCreate(postData);

 module.exports = seedPosts;