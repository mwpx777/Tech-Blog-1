const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, } = require('../models');
const withAuth = require('../utils/auth');



// module.exports = router;
router.get('/',  (req, res) => {
  // console.log(req.session);

  Post.findAll({
    // where: {
    //   user_id: req.session.user_id
    // },
    attributes: [

      'id',
      'title',
      'article',
      'username',

    ],
    include: [
        {
          model: Comment,
          // attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          // include: {
          //   model: User,
          //   attributes: ['username']
          // }
        },
      // {
      //   model: Post,
      //   attributes: ['id', 'title', 'article', 'username'],
      //   include: {
      //     model: User,
      //     attributes: ['username']
      //   }
      // },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('edit', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;