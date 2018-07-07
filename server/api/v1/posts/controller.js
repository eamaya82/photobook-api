const Model = require('./model');

exports.id = (req, res, next, id) => {
  Model.findById(id)
    .then((doc) => {
      if (doc) {
        req.doc = doc;
        next();
      } else {
        res.json({
          message: `${Model.modelName} not found`,
        });
      }
    })
    .catch((err) => {
      next(new Error(err));
    });
};

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
    doc,
  } = req;

  res.json(doc);
};

exports.update = (req, res, next) => {
  const {
    doc,
    body,
  } = req;

  Object.assign(doc, body);

  doc.save()
    .then((updated) => {
      res.json(updated);
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.delete = (req, res, next) => {
  const {
    doc,
  } = req;

  doc.remove()
    .then((deleted) => {
      res.json(deleted);
    })
    .catch((err) => {
      next(new Error(err));
    });
};
