export const SORT_ASCENDING = 1;
export const SORT_DESCENDING = -1;

const sortImpl = (column, sortOrder) => (a, b) => {
  if (a[column.property] > b[column.property]) {
    return SORT_ASCENDING * sortOrder;
  }
  if (a[column.property] < b[column.property]) {
    return SORT_DESCENDING * sortOrder;
  }
  return 0;
};

export const sort = (data, column, sortOrder = SORT_ASCENDING) =>
  data.slice().sort(sortImpl(column, sortOrder));

export const splitToPages = (data, pageSize) => {
  const dataCopy = data.slice();
  const pages = [];
  while (dataCopy.length > 0) {
    pages.push(dataCopy.splice(0, pageSize));
  }
  return pages;
};
