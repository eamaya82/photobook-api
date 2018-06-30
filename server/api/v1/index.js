const router = require('express').Router();

const posts = require('./posts/routes');

router.use('/posts', posts);

module.exports = router;
