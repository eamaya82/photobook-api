const router = require('express').Router();

const controller = require('./controller');

router.route('/')
  .get(controller.all)
  .post(controller.create);

router.route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
