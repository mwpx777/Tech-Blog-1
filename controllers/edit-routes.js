const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, } = require('../models');
const withAuth = require('../utils/auth');


router.get('/:id', withAuth, (req, res) => {
  // console.log(req.session);
  Post.findOne({
    where: {
      //  user_id: req.session.user_id,
      id: req.params.id
    },
    // attributes: [

    //   'id',
    //   'title',
    //   'article',
    //   'username',
    //   'user_id',
    //   'created_at'

    // ],
    // include: [
    //   {
    //     model: Comment,

    //   },
    //   {
    //     model: User,
    //     attributes: ['username']
    //   }
    // ]
  })
    .then(dbPostData => {
      const posts = dbPostData.get({ plain: true });
      console.log(dbPostData)
      res.render('edit', { posts: posts, loggedIn: true });
  
  // console.log(posts)
})
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', withAuth,  (req, res) => {
  Post.update(
    {
      where: {
        id: req.params.id
      }
    },
    {
      title: req.body.title,
      article: req.body.article
      // content: req.body.content
    },
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

router.delete('/:id', withAuth, (req, res) => {
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