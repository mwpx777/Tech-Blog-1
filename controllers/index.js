const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
// const postRoutes = require('./post-routes.js');
const editRoutes = require('./edit-routes.js');
// const createRoutes = require('./create-routes.js');



router.use('/', homeRoutes);
// router.use('/create', createRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/edit', editRoutes);

// router.use('/post', postRoutes);

module.exports = router;
