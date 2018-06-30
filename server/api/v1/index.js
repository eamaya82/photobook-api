const router = require('express').Router();

router.get('/posts', (req, res, next) => {
  res.json({
    message: 'Welcome to API',
  });
});

module.exports = router;
