/* eslint-disable import/prefer-default-export */
const isFloat = x => x % 1 !== 0;

export const calcPaginationTiles = (activePage, visiblePages, numberOfPages) => {
  const pages = Math.min(visiblePages, numberOfPages);
  const rightAvailablePages = numberOfPages - activePage;
  const padding = pages / 2.0;
  let leftPadding;
  let rightPadding;

  if (isFloat(padding)) {
    leftPadding = Math.floor(padding);
    rightPadding = Math.floor(padding);
  } else {
    leftPadding = padding - 1;
    rightPadding = padding;
  }

  if (rightAvailablePages < rightPadding) {
    leftPadding += rightPadding - rightAvailablePages;
  }

  if (activePage - leftPadding <= 0) {
    leftPadding -= 1 - (activePage - leftPadding);
  }

  return Array.from(new Array(pages), (x, i) => i + (activePage - leftPadding));
};

