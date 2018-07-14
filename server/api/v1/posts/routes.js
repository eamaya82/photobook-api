const router = require('express').Router();

const controller = require('./controller');
const commentsRouter = require('./../comments/routes');

router
  .param('id', controller.id);

router.route('/')
  .get(controller.all)
  .post(controller.create);

router.route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

router
  .use('/:postId/coments', commentsRouter);

module.exports = router;
