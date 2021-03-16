const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// router.get('/', (req, res) => {
//   res.render('homepage', {


//   id: 1,
//   post_url: "www.mwpdesigns.com",
//   title: "MWP got this working!",

// });
// });
router.get('/', (req, res) => {
  console.log(req.session);
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_url',
      'created_at',
      // 'username'
    ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //     include: {
    //       model: User,
    //       attributes: ['username']
    //     }
    //   }
    // ]
  })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts });
      // res.render('homepage');
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  // if logged in , redirect to home page
  if(req.session.loggedIn){
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;