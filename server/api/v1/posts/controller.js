exports.all = (req, res, next) => {
  res.json([]);
};

exports.create = (req, res, next) => {
  const {
    body,
  } = req;
  res.json({
    item: body,
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
