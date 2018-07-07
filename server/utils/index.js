const config = require('./../config/');

const {
  pagination,
} = config;

const parsePaginationParams = ({
  limit = pagination.limit,
  page = pagination.page,
  skip = pagination.skip,
}) => ({
  limit: parseInt(limit, 10),
  page: parseInt(page, 10),
  skip: skip ? parseInt(skip, 10) : ((page - 1) * limit),
});

module.exports = {
  parsePaginationParams,
};
