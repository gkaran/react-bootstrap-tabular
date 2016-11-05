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

export const splitToPages = (data, pageSize, pagination) => {
  const pages = [];
  if (pagination) {
    let i = 0;
    let page = data.slice(i, i + pageSize);
    while (page.length) {
      pages.push(page);
      i += pageSize;
      page = data.slice(i, i + pageSize);
    }
  }

  return pages;
};
