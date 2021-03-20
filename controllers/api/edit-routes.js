const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/',  (req, res) => {
 

  Post.findAll({
 
    attributes: [

      'id',
      'title',
      'article',
      'username',
      'user_id'

    ],

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