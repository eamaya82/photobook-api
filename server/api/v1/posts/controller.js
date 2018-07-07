const Model = require('./model');

exports.all = (req, res, next) => {
  Model.find()
    .then((docs) => {
      res.json(docs);
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.create = (req, res, next) => {
  const {
    body,
  } = req;

  const document = new Model(body);
  document.save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.read = (req, res, next) => {
  const {
    params,
  } = req;
  res.json({
    item: {
      id: params.id,
    },
  });
};

exports.update = (req, res, next) => {
  const {
    params,
  } = req;
  res.json({
    item: {
      id: params.id,
    },
  });
};

exports.delete = (req, res, next) => {
  const {
    params,
  } = req;
  res.json({
    item: {
      id: params.id,
    },
  });
};
