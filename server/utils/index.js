const config = require('./../config/');

const {
  pagination,
  sort,
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

const parseSortParams = ({
  sortBy = sort.sortBy.default,
  direction = sort.direction.default,
}, fields) => {
  const whitelist = {
    sortBy: [
      ...Object.getOwnPropertyNames(fields),
      ...sort.sortBy.fields,
    ],
    direction: sort.direction.options,
  };
  return {
    sortBy: whitelist.sortBy.includes(sortBy) ? sortBy : sort.sortBy.default,
    direction: whitelist.direction.includes(direction) ? direction : sort.direction.default,
  };
};

const compactSortToStr = (sortBy, direction) => {
  const dir = direction === sort.direction.default ? '-' : '';
  return `${dir}${sortBy}`;
};

module.exports = {
  parsePaginationParams,
  parseSortParams,
  compactSortToStr,
};
