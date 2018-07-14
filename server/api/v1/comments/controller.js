const {
  Model,
  fields,
  references,
} = require('./model');

const referencesNames = Object.getOwnPropertyNames(references);

const {
  parsePaginationParams,
  parseSortParams,
  compactSortToStr,
  filterByNested,
} = require('./../../../utils/');

exports.id = (req, res, next, id) => {
  Model
    .findById(id)
    .populate(referencesNames.join(' '))
    .exec()
    .then((doc) => {
      if (doc) {
        req.doc = doc;
        next();
      } else {
        res.json({
          sucess: false,
          message: `${Model.modelName} not found`,
        });
      }
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.all = (req, res, next) => {
  const {
    query,
    params,
  } = req;

  const {
    limit,
    skip,
    page,
  } = parsePaginationParams(query);
  const {
    sortBy,
    direction,
  } = parseSortParams(query, fields);
  const sort = compactSortToStr(sortBy, direction);
  const {
    filters,
    populate,
  } = filterByNested(params, referencesNames);

  const count = Model.count();
  const all = Model
    .find(filters)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate(populate);

  Promise.all([count.exec(), all.exec()])
    .then((data) => {
      const [total = 0, docs = []] = data;
      const pages = Math.ceil(total / limit);

      res.json({
        success: true,
        items: docs,
        meta: {
          limit,
          skip,
          total,
          page,
          pages,
          sortBy,
          direction,
        },
      });
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.create = (req, res, next) => {
  const {
    body,
    params,
  } = req;

  Object.assign(body, params);

  const document = new Model(body);
  document.save()
    .then((doc) => {
      res.status(201);
      res.json({
        success: true,
        item: doc,
      });
    })
    .catch((err) => {
      next(new Error(err));
    });
};

exports.read = (req, res, next) => {
  const {
    doc,
  } = req;

  res.json({
    success: true,
    item: doc,
  });
};

exports.update = (req, res, next) => {
  const {
    doc,
    body,
    params,
  } = req;

  Object.assign(doc, body, params);

  doc.save()
    .then((updated) => {
      res.json({
        success: true,
        item: updated,
      });
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
    .then((removed) => {
      res.json({
        success: true,
        item: removed,
      });
    })
    .catch((err) => {
      next(new Error(err));
    });
};
