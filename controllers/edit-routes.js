const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, } = require('../models');
const withAuth = require('../utils/auth');



// module.exports = router;
router.get('/:id', (req, res) => {
  // console.log(req.session);

  Post.findOne({
    where: {
      user_id: req.session.user_id
    },
    attributes: [

      'id',
      'title',
      'article',
      'username',
      'user_id'

    ],
    include: [
      {
        model: Comment,

      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.get({ plain: true });
  // console.log(dbPostData)
  res.render('edit', { post: posts, loggedIn: true });
  console.log(posts)
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

// router.delete('/:id', withAuth, (req, res) => {
router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
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