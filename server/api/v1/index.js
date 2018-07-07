const router = require('express').Router();

const comments = require('./comments/routes');
const posts = require('./posts/routes');
const users = require('./users/routes');

router.use('/comments', comments);
router.use('/posts', posts);
router.use('/users', users);

module.exports = router;
