const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {

  
  id: 1,
  post_url: "www.mwpdesigns.com",
  title: "MWP got this working!",
  created_at: new Date()
});
});

module.exports = router;