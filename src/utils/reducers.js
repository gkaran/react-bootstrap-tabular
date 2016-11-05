/* eslint-disable import/prefer-default-export */

export const sum = (data, columns) => {
  const defaultValue = 0;
  return data.reduce((previous, current) => {
    return columns
      .map(c => ({ [c]: (previous[c] || defaultValue) + (current[c] || defaultValue) }))
      .reduce((a, b) => Object.assign({}, a, b), {});
  }, {});
};
